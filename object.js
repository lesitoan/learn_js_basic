// OBJECT JS

//  tạo object
var myInfo = {
    name: 'toan',
    age: 18,
    address: 'quang nam',
    // khi đặt tên key cũng giống như đặt tên biến
    // nhưng muốn đặt key chứa các kí tự đặc biệt thì dùng cách sau:
    'full-name': 'le si toan'
};
console.log(myInfo);

// thêm key vào key có sẵn
myInfo.email = 'lesitoan.media@gmail.com';
// nếu key cần thêm có kí tự đặc biệt
myInfo['my-phoneNumber'] = '0353349251';
console.log(myInfo);

// cách lấy từng key trong object
console.log(myInfo.name);
console.log(myInfo['my-phoneNumber']);

// cách thêm key vào object từ 1 biến
var namekey = 'full-name';
var myObject = {
    age: 18,
    [namekey]: 'le si toan',
}
console.log(myObject);

// xóa cặp key value
delete myInfo.age; // xoa key age
console.log(myInfo);

// value object có thể là function
var myObject1 = {
    name1: 'toan',
    nameFunc: function() {
        return this.name1; // this ở đây chính là key name1
    }
}
console.log(myObject1.nameFunc()); // trở đến hàm nameFunc trong object, sau đó thực thi hàm đê in ra value

// cách gọi cho đúng trong object
// function --> phương thức (method)
// others --> thuộc tính (property)

// object constructor: XÂY DỰNG ĐỐI TƯỢNG
// định nghĩa object constructor
function User(fristName, lastName, avatar){
    this.fristName = fristName ;// định nghĩa đối tượng
    this.lastNam = lastName ;
    this.avatar = avatar;
    this.getName =  function() {
        return `${this.fristName } ${this.lastName}`;
    }
} 
var author = new User('Si', 'Toan','img'); //new bắt buộc phải có
var user = new User('Son', 'Dang','img');
console.log(author);
console.log(user);

// thêm thuộc tính riêng cho các đối tượng sau khi khởi tạo
// author.title ='thêm title cho author';
// use.comment = 'them thuộc tính comment cho use';

//object PROTOTYPE nguyên mẫu, khuôn mẫu
/* object prototype - basic
1 Prototype là gì ??  
  Object prototype là nguyên mẫu để tạo nên 1 đối tượng
  
  Nguyên liệu 
  Add được bên ngoài khi đối tượng được tạo ra
  Cú pháp thêm thộc tính vào Object (tất cả các phương thức và thuộc tính được thêm vào bằng prototype sẽ có ở trong "list" _proto_ )
 
  (object).Prototype.(method) 
  có thể sử dụng dấu "." để truy cập vào trong thuộc tính đó bằng cú phaps
  (Object).(method)
  
2 Sử dụng khi nào ?? 
  sau khi function được tạo ra (sau khi khởi tạo đối tượng)
  khi nó là function mới truy cập được những đối tượng được thêm vào sau khi function được  tạo ra 

*/

User.prototype.className ='F8';
User.prototype.getClassName =function(){
    return this.className;
}

var user2 = new User('thai','nhi','avatar2');
// ocbject prototype sử dụng để add đối tượng từ bên ngoài
console.log(user.className);
console.log(user2.getClassName());


// đối tượng date
// khai báo theo object
var date = new Date();
console.log(typeof date)  // biến date sẽ trả về kiểu object
// khai báo theo string
var date1 = Date();
console.log(typeof date1); //biến date sẽ trả về kiểu string
// string: không thể truy đến từng thành phần
// object: có thể truy đến từng thành phần, ngày, tháng, năm...
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
console.log(`${day}/${month}/${year}`);

// Math object

//không phải là 1 constructor. không khởi tạo với từ khóa New Math

//sử dụng để truy xuất những thuộc tính VD: Math.

//Math.PI 
console.log(Math.PI); 

Math.round() //làm tròn số console.log(Math.round(1.3));

Math.abs() //giá trị tuyệt đối console.log(Math.abs(4));

Math.ceil() //làm tròn trên console.log(Math.ceil(4.1)) //làm tròn lên 5

Math.floor() //làm tròn dưới
console.log(Math.floor(4.1)) //làm tròn 4

Math.random() //trả về dãy số thập phân nhỏ hơn 1 console.log(Math.random())

Math.min() //lấy ra số nhỏ nhất console.log(Math.min(-100, 1, 3, 4))

Math.max() //lấy ra số lớn nhất sonsole.log(Math.max(100, 3, 4, 5))
