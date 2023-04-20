// message from main thread 
onmessage = (evt) => {
    postMessage(fibanocci(evt.data)); // post back to main thread
}
function fibanocci(no) {
    return (no == 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no -2);
}