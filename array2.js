// LÀM VIỆC VỚI MẢNG 2

var courses=[
    {
      id :0,
      name: "html",
      coin:0
    },
    {
        id :1,
        name: "php",
        coin:100
    },
    {
        id :2,
        name: "java",
        coin: 100
    },
    {
        id :3,
        name: "javascript",
        coin: 100
    },
    {
        id :4,
        name: "html",
        coin: 100
    },
  ]
  
  // duyệt từng phần tủ của mảng
  courses.forEach(function (number, index, array) {
    console.log(index,number, array);
  }) // Output: [1, 2, 3]
  
  // kiểm tra tất cả phần tử của mảng có thỏa 1 điều kiện
  // trả về true hoặc false
  console.log(courses.every(function (course) {
    return course.coin === 0;
  })) // Output: false
  
  // kiểm tra có ít nhất 1 phần tử của mảng có thỏa 1 điều kiện
  // trả về true hoặc false
  console.log(courses.some(function (course) {
    return course.coin === 0;
  })) // Output: true
  
  // tìm kiếm phần tử đầu tiên thỏa mãn điều kiện
  console.log(courses.find(function (course) {
    return course.name === 'html';
  })) // Output: {id :0, name: "html", coin:0}
  
  // tìm tất cả phần tử thỏa mãn điều kiện, và trả vè phần tử thỏa mãn
  console.log(courses.filter(function (course) {
    return course.name === 'html';
  })) // Output: [{id :0, name: "html", coin:0},{id :3, name: "html", coin:100}]
  
  // array map() method: chỉnh sửa, lấy ra nội dung tùy chỉnh của array
  // ví dụ: thêm từ 'khoa hoc' vào key name, thêm key coinText vào tất cả phần tử
  function courseHandler(course, index) {
    return {
      id: course.id,
      name: `Khoa hoc: ${course.name}`,
      coin: course.coin,
      coinText: `gia: ${course.coin}`,
      index: index
    }
  }
  var newCourses = courses.map(courseHandler);
  console.log(newCourses);
  
  // Array reduce() method  
  // hàm reduce đơn giản là hàm mà dùng 1 biến cộng dồn
  // để trả về kết quả của một hàm nào đó(tức là phụ 
  // thuộc vào việc return ra cái gì), hàm này thường
  // có ít nhất 2 tham số, một là giá trị khởi tạo ban
  // đầu accumulator thường là bằng 0, hai là giá trị hiện tại currentValue,
  // ví dụ: tính tổng coin của courses
  function total(storage,item) {
    return item.coin + storage;
  }
  var sumCoin = courses.reduce(total,0);// 0 là giá trị khởi tạo của tổng
  console.log(sumCoin); //output: 400
  // CHÚ Ý: giá trị khởi tạo không bắt buộc, giá trị đầu tiên của mảng
  // được lấy làm giá trị khởi tạo (không áp dụng với tất cả bài toán)
  var array = [1,2,3,4,5];
  var sum = array.reduce(function(total, index) {
    return total + index;
  });
  console.log(sum);
  
/*
CẤU TRÚC REDUCE
array.reduce(callback, initialvalue), trong đó callbak là function
ví dụ : 
var sum = array.reduce(function(total, number, index, array) {
    return total + number;
  },0);
*/

// includes method: tìm kiếm vị trí trong array và string và trả về true, false
// string
var title = 'le si toan';
console.log(title.includes('si')); //output: true
// array
var array = [1,2,3,4,5];
console.log(array.includes(4));  //output: true
