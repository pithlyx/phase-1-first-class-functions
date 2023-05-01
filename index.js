function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
    console.log("Function returned!");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
    console.log("Function returned!");
    };
}