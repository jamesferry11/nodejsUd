var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ('Hey. It worked!');
        resolve();
        reject('Unable to fulfill promise');
    }, 2500);
});

somePromise.then((message)=> {
    console.log('Success: Hey it Worked!')
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
})