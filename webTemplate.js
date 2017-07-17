var TemplateEngine = function(html, options){
    var re = /<%([^%>]+)/g;
    var reExp = /(^()?(if|for|switch|case|break|{|}))(.*)?/g;
    var code = 'var r=[];\n';
    var cursor = 0;
    var add = function(line, js){
        js?(code += line.match(reExp)?line+'\n':'r.push('+line+');\n') : (code += line!=''?'r.push('+line.replace(/"/g, '\\"')+ '");\n':'');
        return add;
    }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length-cursor));
    code += 'return r.join("")';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    
}


var template = '<p>hello, I am <%name%>, I\'am <%age%> years old</p>';
console.log(TemplateEngine(template, {
    name: 'jiang',
    age: 26,
}))