const func1 = new Function(
    `
    const args = arguments;
    let sum = 0;
    for (let i=0; i<args.length; i++) {
        sum += args[i];
    }
    console.log('sum---->',sum);
    `
);
console.log("function--->", func1);
func1(1,3,4,5);