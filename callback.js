// CALLBACK

// là hàm (function)
// được truyền qua đối số
// được gọi lại(trong hàm nhận đối số)


function myCallback(value) {
    console.log(value);
}
function myFunction(param) {
    param('day la callback');
}
myFunction(myCallback);

Array.prototype.map2 = function() {

}