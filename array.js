// ARRAY

// tạo array
var array = [1,2,3,4];
console.log(array);

// kiem tra do dai
console.log(array.length);

// kiem tra bien co phai array
console.log(Array.isArray(array)); //tra ve true hoac false

// in phan tu trong mang
console.log(array[1]);

// toString  chuyển mảng thành string
var array1 = ['java', 'php' ,'c++'];
console.log(array1.toString()); 

// join chuyen aray -> chuoi
console.log(array1.join('')); 
console.log(array1.join(' - ')); //toString không thể thay đổi dấu "," của mảng

// pop xóa phần tử cuối mảng và trả về phần tủ đã xóa
console.log(array1.pop());

//  shift xóa phần tử đầu mảng và trả về phần tử đã xóa
console.log(array1.shift());

// unshift thêm mới một hay nhiều phàn tử vào đầu mảng
console.log(array1.unshift('c#', 'notejs'));
console.log(array1);

//  push them một hoặc nhiều phần tủ vào cuối mảng 
//  và trả về độ dài mới của mảng
console.log(array1.push('python', 'ruby'));
console.log(array1);

// splicing xoa, cắt, chèn phầng tử 
array1.splice(1, 2) //xoa 2 phan tử từ vị trí số 1
console.log(array1);
array1.splice(1, 0, 'reatjs') //chừn thêm kí tự 'reatjs' vào vị trí 1
console.log(array1);
array1.splice(2, 1, 'html') //xoa 1 phần tử bắt đầu từ vị trí số 2 sau đó thêm vào chỗ đó phần tử 'html'
console.log(array1);

// concat nối array
var array2 = 'css'
console.log(array1.concat(array2)); // hợp nhất vào mảng array1
console.log(array1);

// slicing cắt một vài hoặc toàn bộ phần tử
console.log(array1.slice(1, 3)); // bắt đầu cắt từ vị trí 1 đến trước vị trí 3
console.log(array1.slice(0)); // cắt hết
console.log(array1.slice(0, -3)); 

