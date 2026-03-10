const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayPost(data);
    });
};

// const displayPost = (posts) => {
//     // console.log(posts);
//     // for(let i = 0; i < posts.length; i++) {
//     //     console.log(posts[i]);
//     // }
//     // or
//     // for(let post of posts) {
//     //     console.log(post);
//     // }
//     // or
//     posts.forEach(post => {
//         console.log(post);
//     });
// }

// posts recieve array of object recieve korse
const displayPost = (posts) => {
    // 1. get the container
    const postContainer = document.getElementById("post-container")
    // console.log(postContainer);
    
    posts.forEach(post => {
        // console.log(post.title);
        // 2. create HTML element
        const li = document.createElement("li");
        li.innerText = post.title;
        // console.log(li);

        // 3. add li into container
        postContainer.appendChild(li);
    });
}