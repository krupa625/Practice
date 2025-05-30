// const process = require('node:process');

// process.on('beforeExit', (code) => {
//   console.log('Process beforeExit event with code: ', code);
// });

// process.on('exit', (code) => {
//   console.log('Process exit event with code: ', code);
// });

// console.log('This message is displayed first.');

// const process = require('node:process');

// process.on('warning', (warning) => {
//   console.warn(warning.name);    // Print the warning name
//   console.warn(warning.message); // Print the warning message
//   console.warn(warning.stack);   // Print the stack trace
// });

// function name() {
//   const p = new Promise((res, rej) => {
//     setTimeout(res, 2000, 123);
//   });
//   return p;
// }

// function name12() {
//   name().then((val) => {
//     console.log("hhh", val);
//   });

//   // let res2 = await name();
//   // console.log(res2);
// }

// name12();

// const prom = new Promise((res, rej) => {
//   setTimeout(res, 2000, 123);
// });
// prom
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   });

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  // return p;
  p.then((val) => {
    console.log(val);
  });
}

function basicReturn() {
  // return Promise.resolve(p);
  p.then((val) => {
    console.log(val);
  });
}

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false
asyncReturn();
basicReturn();
