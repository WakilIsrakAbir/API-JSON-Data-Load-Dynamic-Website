const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayPost(data);
    });
};

// {
//     "userId": 10,
//     "id": 92,
//     "title": "ratione ex tenetur perferendis",
//     "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
// }

const displayPost = (posts) => {
    // 1. Get the Container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        // console.log(post);
        // 2. Create Element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
         <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>   
        `

        // 3. add to the container
        postContainer.append(postCard)
    });
}

loadPost()