var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var Accounts = require('./account/account').items;
var ejs = require('ejs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var identityKey = 'login_session';
app.use(session({
  name: identityKey,
    secret: 'jiang',
    store: new FileStore(),
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 100 * 1000
    }
}));

var findUser = function (name, password) {
    return Accounts.find(function (item) {
        return item.name === name && item.password === password;
    })
};

app.post('/login',function (req, res, next) {
    var user = findUser(req.body.name, req.body.password);
    if(user){
      req.session.regenerate(function (err) {
          if(err){
            return res.json({
              ret_code: 2,
                ret_msg: '登录失败',
            })
          }
          req.session.loginUser = user.name;
          res.json({
            ret_code: 0,
              ret_msg: '登录成功'
          })
      })
    } else {
      res.json({ret_code:1,ret_msg:'账号或者密码错误'})
    }
});

app.get('/logout',function (req, res, next) {
    req.session.destroy(function (err) {
        if(err){
          res.json({ret_code:2,ret_msg:'退出登录失败'});
        }
        res.clearCookie(identityKey);
        res.redirect('/');
    })
});

app.get('/', function (req, res, next) {
    var sess = req.session;
    var loginUser = sess.loginUser;
    var isLogined = !!loginUser;
    res.render('index', {
      title: 'login logout system',
      isLogined : isLogined,
        name: loginUser
    });
});

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
