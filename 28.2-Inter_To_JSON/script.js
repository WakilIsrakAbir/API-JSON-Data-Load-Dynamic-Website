console.log("Explore Api");

const persone = {
    name: "Abir",
    fruit: "Mango",
    dish: "Beef",
    friends: ["asik", "sakib", "miraj", "anon"],
    isRich: false,
    money: 3000,
};
console.log(persone, typeof persone);

// JSON => JS Object with Notation
// JSON.stringify => Object to JSON
// JSON.parse => JSON to Object

const personeJSON = JSON.stringify(persone);
console.log(personeJSON, typeof personeJSON);

const perseJSON = JSON.parse(personeJSON);
console.log(perseJSON, typeof perseJSON);