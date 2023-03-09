// Fetch 
// API (URL) (application programing interface) -> cổng giao tiếp giữa các phần mềm
// Backend -> API -> Fetch -> JSON/XML -> JSON.parse -> js types -> render ra giao diện HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi) 
    .then(function(response) {  // response là luồng dữ liệu trả về
        return response.json(); // trả về promise
    })
    .then(function(posts) {  // posts là array gồm nhiều object
        var htmls = posts.map(function(post) {
            return `<ul>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </ul>`;
        }) // trả về htmls là một array
        var html = htmls.join(''); // -> chuyển thành chuỗi
        document.getElementById('post-api').innerHTML = html; 
    })