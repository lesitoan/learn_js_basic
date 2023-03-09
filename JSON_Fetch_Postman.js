// JSON (JavaScrip Object Notation) là gì ? : là một đinh dạng dữ liệu (chuỗi)
// các kiểu dữ liệ JSON thể hiện: number, string, boolean, null, array, object

 var json = '1';  // thẻ hiện số 1
 var json1 = 'true'; // thể hiện true false
 var json2 = 'null'; // thể hiện null
 var json3 = '["java", "php", "C++"]'; // thể hiện array
 var json4 = '{"name":"le si toan", "age":18, "class":"bach khoa"}'; // thể hiện object
// Parse: chuyển json thành js
console.log(typeof JSON.parse(json));
// stringify: chuyển các kiểu dữ liệu thành json
var a = 5;
console.log(typeof JSON.stringify(a)); // output: string

// promise -> sinh ra để giải quyết thao tác bất đồng bộ, khi sử dụng promise ta 
// thường dùng calllback, mà callback có 1 vấn đề là callback hell => code bị rối, khó nhìn
// promise sinh ra ở phiên bẳn ES6 để giải quyết vấn đề callback hell => dễ đọc code hơn
var pro = new Promise(function(resolve, reject) { // promise nhận vào 1 Executor function
        // logic
        // thành công: resolve()
        // thất bại: reject()
        resolve('Thành công!');
    }); // promise chính là 1 object contructor, nhận vào 1 function
pro
    .then(function(success) { // promise rơi vào trường hợp này nếu phía trên thành công(resolve)
        console.log(success);
    })
    .catch(function(fail) { // promise rơi vào trường hợp này nếu phía trên thất bại(reject)
        console.log(fail);
    })
    .finally(function() { // promise rơi vào trường hợp này nếu thành công hoặc thất bại
        console.log('done!');
    })
// ví dụ: viết chương trình in số 1 delay 1s in ra 2 delay 1s in ra 3
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    })
}

delay(1000)
    .then(function() {
        console.log(1);
        return delay(1000);
    })
    .then(function() {
        console.log(2);
        return delay(1000);
    })
    .then(function() {
        console.log(3);
        return delay(1000);
    })
    .then(function() {
        console.log(4);
        return delay(1000);
    })
    .then(function() {
        console.log(5);
        return delay(1000);
    })
    
    // Promise methods (resolve, reject, all)
    // 1. promise.resolve
    Promise.resolve('thanh cong') // trả về 1 promise luôn thành công
        .then(function(result) {
            return result;
        })
    // 2. promise.reject
    Promise.reject('that bại') // trả về 1 promise luôn thất bại
        .catch(function(result) {
            return result;
        })
    // 3. promise.all: chạy song song các promise bất đồng bộ
    var p1 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 8000);
    })
    var p2 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 9000);
    })
    // nối p1 và p2 để được mảng [1, 2, 3]
    var p3 = Promise.all([p1, p2]) // sẽ trả về một promise
    // nếu p1 resolve và p2 resolve thì trả về p3 resolve. nếu có một phân tử reject thì p3 trả về reject
    p3
        .then(function(result) {
            console.log(result[0].concat(result[1]));
        })





// LocalStorage: bộ nhớ lưu trên trình duyệt
// setItem: lưu dữ liệu vào loacalStorage
localStorage.setItem('name', 'Le Si Toan'); //lưu theo kiểu key value
localStorage.setItem('age', 16);
// getItem: lấy dữ liệu được lưu trong localStogare
console.log(localStorage.getItem('name')); //output: le si toan
// removeItem: xóa
localStorage.removeItem('name'); // xóa key name
var course = {
    name:'Si Toan',
    age: 19,
    address: 'Quang Nam'
}
localStorage.setItem('data', JSON.stringify(course)); // ta không ther truyền thẳng object vào trong hàm nên sẽ phải convert sang chuỗi bằng cú pháp stringify
// cách lấy ra data
console.log(JSON.parse(localStorage.getItem('data'))); // output là object 