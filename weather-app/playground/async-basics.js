console.log('Starting App');

setTimeout(() => {
    console.log('Inside of the callback');
},2000);

setTimeout(() => {
    console.log('Second setTimeout');
}, 0);

console.log('Finishing App');

