// macro-task(宏任务)：
// 可以理解是每次执行栈执行的代码就是一个宏任务(包括每次从事件队列中获取一个事件回调并放到执行栈中执行)。
// 浏览器为了能够使得 JS 内部(macro)task与 DOM 任务能够有序执行，会在一个(macro)task执行结束后，在下一个(macro)task执行开始前，对页面进行重新渲染。
// (macro)task 主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)
// micro-task(微任务)：
// 可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前 task 任务后，下一个 task 之前，在渲染之前。所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染。也就是说，在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）。
// microtask 主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)

console.log('1');

setTimeout(function() {
  console.log('2');
  process.nextTick(function() {
    console.log('3');
  });
  new Promise(function(resolve) {
    console.log('4');
    resolve();
  }).then(function() {
    console.log('5');
  });
});
process.nextTick(function() {
  console.log('6');
});
new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  console.log('8');
});

setTimeout(function() {
  console.log('9');
  process.nextTick(function() {
    console.log('10');
  });
  new Promise(function(resolve) {
    console.log('11');
    resolve();
  }).then(function() {
    console.log('12');
  });
});

// 1,7,8,2,4,5,6,3,9,11,12,10

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
