
// HTML DOM (document object model)
// DOM có 3 thành phần: element, text, attribute
// -> có thể thay đổi những gì nhìn thấy trên webside
/*------------------------------------------- */

document.write("le si toan")  // nhận vào chuỗi

// 1. get element methors: 
// ID, class, tag, css selector
document.getElementById('heading_ID'); // trả về trực tiếp element, show ra 1 phần tử vì trong ct chỉ có một ID
document.getElementsByClassName('heading_class'); // trả về HTMl collection tương tự như một mảng
document.getElementsByTagName('h1');// trả về HTMl collection tương tự như một mảng
document.querySelector('h1'); // trả về trực tiếp element
document.querySelectorAll('h1'); // trả về HTMl collection tương tự như một mảng
// HTML colection

// DOM attributes
// thêm attibutes vào element
var headingElement = document.querySelector('h1');
headingElement.id = 'heading'; // id chỉ xuất hiện khi đoan js được thực thi
headingElement.className = 'heading';
// cách khác: thêm attibutes bằng phương thức:
headingElement.setAttribute('class', 'heading1');//thuộc tính 1 là tên attribute cần set, thuộc tính 2 là tên
headingElement.setAttribute('tenbatki', 'toandeptrai') // có thể set tên bất kì
// cách lấy ra attributes
console.log(headingElement.getAttribute('class')); // tên attribute cần lấy

// InnerText vs textContent Property
// cách lấy text trong element
var headingElement_1 = document.querySelector('h1');
console.log(headingElement_1.textContent); //dùng textcontent
console.log(headingElement_1.innerText); //dùng innertext
// cách chỉnh sửa text trong element
headingElement_1.innerText = 'đây là new heading'; //chỉ xảy tra khi mã js được thực thi
// sự khác nhau giữ innertext và textcontent
/**
 * innertext: lấy ra những gì thấy trên màn hình trình duyệt theo đúng vị trí
 * textcontent: lấy tất cả nội dung trong thẻ gọi đến mà vẫn giữ nguyên vị trí khoảng trắng, 
 * ví dụ có bị ẩn bằng thuộc tính display: none; thì vẫn xuất hiện khi dùng textcontent để gọi
 * ví dụ:
 */
console.log([document.querySelector('h2')]);
console.log((document.querySelector('h2')).innerText);
console.log((document.querySelector('h2')).textContent);


// InnerHTML vs OuterHTML Property: thêm một element HTML mới vào element
// innerHTML: chỉ tác động vào phần con của thẻ được gọi đến
var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1>heading</h1>'; // thêm thẻ h1 vào thẻ div có sẵn và thay thế toàn bộ các thẻ con mà thẻ div có sẵn
console.log(boxElement.innerHTML); // xuất ra tất cả thẻ con trong thẻ cha được gọi đến

// outerHTML: tác động từ thẻ được gọi đến
var boxElement_1 = document.querySelector('.box1');
boxElement_1.outerHTML = '<h2>heading</h2>'; // thay thẻ div có class box1 bằng thẻ h2
console.log(boxElement_1.outerHTML); // lấy ra thẻ div có class box1 còn lưu trong bộ nhớ



// DOM CSS - mục đích là để thêm css chứ k dùng để css chính
var boxCssElement = document.querySelector('.box-css');
// css thủ công
boxCssElement.style.width = '200px';
boxCssElement.style.height = '100px';
boxCssElement.style.backgroundColor = 'red';
// css object
Object.assign(boxCssElement.style, {
    width: '300px',
    height: '70px',
    backgroundColor: 'blue'
})
// lấy ra giá trị css - chỉ lấy được khi có css inline
console.log(boxCssElement.style.width);

// ClassList Property: quản lí class của element như là

var boxClassList = document.querySelector('.box-classList');
console.log(boxClassList);

console.log(boxClassList.classList);
console.log(boxClassList.classList.value); // lấy ra class ở dạng chuỗi

// add: thêm thuộc tính vào element
boxClassList.classList.add('red', 'blue');
// contains: kiểm tra một class có nằm trong element không
boxClassList.classList.contains('red'); //output: true
// remove: xóa bor 1 class khỏi element
boxClassList.classList.remove('blue'); // xoas class blue
// toggle: khi gọi đến toggle nếu class đó đa có thì sẽ bị xóa, còn nếu chưa có sẽ được thêm vào
boxClassList.classList.toggle('blue');



// DOM EVENTS
// 1. attribute events -> định nghĩa thẳng event vào thẻ HTML
// 2. Assign event using the element node
// lưu ý: sử dụng từ 'on trước các sự kiện cần lấy
var h1DomEvent = document.querySelectorAll('.h1DomEvent');
for(var i = 0; i < h1DomEvent.length; i++) {
    h1DomEvent[i].onclick = function(e) {
        console.log(e.target);
    }
}

// event listener
// DOM events dùng đối với các sự kiện đơn giản
// Event listener dùng với nhiều sự kiện lắng nghe cùng 1 lần
var btn = document.querySelector('button');
function viec1() {
    console.log('viec 1');
} 
btn.addEventListener('click', viec1); // click là thuộc tính, viec1 là function

// cách xóa bỏ lắng nghe sự kiện sau 3s
setTimeout(function () {
    btn.removeEventListener('click', viec1); // chọn thuộc tính và công việc bạn muốn hủy b
}, 3000);




