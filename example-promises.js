// Example ng Promises

function getWeather(location){
    return new Promise(function (resolve, reject) {
        resolve(79);
        reject("City not found");
    });
}

getWeather("Cavite").then(function (temp) {
    console.log("Success Promise", temp);
}, function (err) {
    console.log("Error", err);
});


// +++++++++++++++++++++++++++++++++ //
// Challenge

console.log(" +++++++++++++");
console.log(" Challenge");
console.log(" +++++++++++++");

function addPromise (a, b) {
    return new Promise (function (resolve, reject) {
        if(typeof a === "number" && typeof b === "number") {
            resolve(a + b);
        }else {
            reject("A and B must be a number");
        }
    });
}

addPromise(8,9).then(function (result) {
   console.log("Result : ", result); 
}, function (err) {
    console.log("Must be a number, ", err);
});