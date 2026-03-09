
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise of response
    .then((res) => res.json())
    // also promise of response
    .then((data) => console.log(data));
};

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayPost(data);
    });
};

const displayPost = (posts) => {
    // console.log(posts);
    posts.forEach(post)
};