
const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise of response
    .then((res) => res.json())
    // also promise of response
    .then((data) => console.log(data));
}