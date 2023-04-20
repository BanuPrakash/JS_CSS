onmessage = (evt) => {
    postMessage(fibonacci(evt.data));
}

function fibonacci(no) {
    if(no == 0 || no == 1) {
        return no;
    } else {
        return fibonacci(no-1) + fibonacci(no - 2);
    }
}