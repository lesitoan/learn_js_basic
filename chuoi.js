
//  LÀM VIỆC VỚI CHUỖI

// tạo chuỗi
var fullName = 'a b c a b ';
var fullName2 = new String('Si Toan');

// cách thêm dấu ' vào chuỗi
var fullName2 = 'Si toan \'Dep Trai\'';

// xem độ dài chuỗi
console.log(fullName.length);

// cách xuống dòng khi quá nhiều kí tự
var vanBan = "Tham gia nhóm Học lập trình tại F8 trên Facebook"
+"để cùng nhau trao đổi trong quá trình học tập"
+"Các bạn subscribe kênh Youtube F8 Official"
+"để nhận thông báo khi có các bài học mới nhé ";

// template string ES6: sử dụng cạp dấu ``
var ho = 'Le';
var ten = 'Toan';
console.log(`Toi ten: ${ho} ${ten}`);

// các thuộc tính của chuỗi

// find index: tìm kí tự trong chuỗi
console.log(fullName.indexOf('a')); //trả về vị trí đầu tiên xuất hiện
// cách tìm bắt đầu từ vị trí bất kì
console.log(fullName.indexOf('a',5)); //bắt đầu tìm từ vị trí số 5 trong chuỗi
//cách tìm vị trí cuối cùng
console.log(fullName.lastIndexOf('c')); //tìm vị trí cuối cùng xuất hiện chữ c
//cách tìm khác
console.log(fullName.search('c')); 

//cut string: cát chuỗi
console.log(fullName.slice(2,3)); //cắt kí tự từ vị trí 2 đến trc vị trí 3
console.log(fullName.slice(2)); //bắt đầu cắt từ vị trí 2 đến hết
console.log(fullName.slice(0)); //căt hết chuỗi

// replace: thay kí tự
var myString = '    hoc JS tai f8 - JS - JS    ';
console.log(myString.replace('JS','JAVASCRIPT')); //thay thế js bằng javascrips, chỉ thay thế đc một vị trí đầu tiên
console.log(myString.replace(/JS/g,'JAVASCRIPT')); //thay thế tất cả chữ JS

//convert to upper,lower case
console.log(myString.toUpperCase()); // viết hoa
console.log(myString.toLowerCase()); // viet thuong

//trim: loại bỏ kí tự trắng thừa ở 2 đầu
console.log(myString.trim());

// split: tách chuỗi thành array
var myStr = 'java, python, PHP'
console.log(myStr.split(', '));

//get a character by index: lấy kí tự trong chuỗi
console.log(myStr[2]); //tìm kí tự ở vị trí số 2
console.log(myStr.charAt(2)); //tìm kí tự ở vị trí số 2
// *cách tìm ở 2 th này chỉ khác nhau khi không có kí tự đó trong chuỗi thì myStr[2] trả về undefined, còn myStr.charAt(2) trả về string rỗng
