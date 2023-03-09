// ECMAScrip 6+ ( ra mắt 2015)

// 1. let & const
// khác nhau giữa var với let, const : 
    /**
     * 1. scpre (phạm vi truy cập), hosting (đưa lên trên)
     * 2. assigment
     */

// 2. Template literals
const age = '18 tuoi';
const name = 'le si toan';
console.log(`thông tin cá nhân: ${name} ${age}`);

// 3. multi-line string // cách viết xuống dòng mà không cần dung \n
const str = `si toan 
dep trai
sieu cap vip pro`;

// 4. Arrow function
var sum = (a , b) => a + b; // tương đương với return a+b
// sau dấu => nếu có căp dấu {} thì phải dùng return, còn bỏ đi {} thì có thể viết gon
// ví dụ viết hàm trả về object
var object = (a, b) => ({a: a, b: b});
// nếu function chỉ nhận 1 tham số thì có thể bỏ ()
var result = a => console.log(a);
// lưu ý: không thể dùng Arrow function trong object contructor

// 5. Classes -> giống object contructor nhưng được dùng với các ct có nhiều dòng code
class Course {
    constructor(name, price) {
        this.name = name;
        this,price = price;
    }
}
console.log(Course);

// 6. Default parameter values: định nghĩa giá trị mặc định cho tham số
// sử dụng với những tham số của hàm không bắt buộc nhận giá trị, còn các tham số nhận giá trị thì k cần đặt (bị thừa)
function logger(log, type = 'log') {
    console[type](log);
}
logger('hello.....', 'error');

// 7. Enhanced object literals dùng để:
    /**
     * 1 định nghĩa key: value cho object ngắn gọn hơn
     * 2 định nghĩa methor cho object
     * 3 định nghĩa key cho object dưới dạng biến
     */
// ví dụ:
// tạo object theo cách bt
var name1  = 'js';
var price = 1000;
// var course = {
//     name1: name1,
//     price: price
// }
// key và value nếu ta đặt trùng tên thì có thể rút gọn như sau
var course = {
    name1, // đã rút gọn
    price, // đã rút gọn
    // getName: function() {  viết methor theo cách cũ
    //     return name1;
    // }
    getName() {           // cách rút gọn
        return name1;
    }
}

// 8. Destructuring, Rest
// cách lấy ra phần tử array
var array = ['php', 'js', 'c++'];
var[a, b, c] = array;
console.log(a, b, c);
// nếu muốn lấy phần tử 0 và 2 của array thì:
var [d, , e] = array;
console.log(d, e); // output: php c++
// lấy ra phần tủ object
var course = {
    newName: 'js',
    price: 1000
}
var{newName, price} = course; // chú ý đặt tên biến bên trong {} phải trùng tên key object
console.log(newName, price); // output: js, 1000


// 9. rest parameters: lấy ra phần còn lại, dùng để định nghĩa tham số
var array1 = [1, 2, 3, 4, 5];
// dùng ...rest để lấy tất cả phần tử còn lại
var[f, g, ...h] = array1;
console.log(h); // output: [3, 4, 5]
// dùng với object cũng tuong tự array
//mở rộng: auwr dụng ...rest để tạo hàm nhập vô hạn đối số
function logger(...rest) {
    console.log(rest); // trả về array
}
var a = logger(1,2,3,4,5,6,7,8,9); // nhận vào vô hạn đối số

// 10. Spread: dùng để nối array, object...vv. được dùng để truyền đối số
// với array
var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];
var newArray = [...array1, ...array2]// ... được hiểu là bỏ dấu [], {} của array, object
console.log(newArray);
// với object
var object1 = {
    name: 'toan',
    age: 18
}
var object2 = {
    address: 'da nang'
}
console.log({...object1, ...object2}); // output: là object mới có 3 key của obj1+obj2

console.log({...object1}); // in ra object1
console.log(...array1); // cặp dấu [] của array1 sẽ bị mất đi


// 11. Tagged template literals -> tạo ra function và gọi function đó qua cú pháp của template literals
var brand = 'F8', course = 'Javascript';
function highlight([first, ...strings], ...value) {
    return value.reduce((acc, cur) => [...acc, cur, strings.shift()], first).join(' ');
}       
console.log(highlight`Hoc lap trinh ${course} tai ${brand} !`);


// Optional chaining (?.)
// xử lý trường hợp có hay không của các function, object,array cú pháp ngắn gọn hơn bằng ?. thay vì sử dụng if()



