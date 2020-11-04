//Problem 0 : Part A (15 mins):
//Playing with JSON object’s Values:
//https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5

var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omlet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};
//My code starts from here
cat.name = "Fluffyy";
cat.height = "25cm";
cat.weight = "4kg";

console.log(
  `CatFriends Activities: ${cat.catFriends[0].activities} , ${cat.catFriends[1].activities}`
);
console.log(
  `CatFriends: ${cat.catFriends[0].name} , ${cat.catFriends[1].name}`
);
console.log(
  `totalWeight: ${cat.catFriends[0].weight + cat.catFriends[1].weight}`
);

console.log(
  `Total Activities of all cats: ${
    cat.activities.length +
    cat.catFriends[0].activities.length +
    cat.catFriends[1].activities.length
  }`
);

cat.catFriends[0].activities.push("sleep", "play with Dogs");

console.log(`Added Properties for bar : ${cat.catFriends[0].activities}`);

cat.catFriends[0].furcolor = "black";

console.log(`Fur Updated for Bar : ${cat.catFriends[0].furcolor}`);
