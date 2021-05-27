//Exercises Level 1
/*
1)Change skills array to JSON using JSON.stringify()

2) Stringify the age variable

3) Stringify the isMarried variable

4) Stringify the student object
*/

// Solution 1
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];

let JSONSkills = JSON.stringify(Object.assign({}, skills));
let stringToJSONObject = JSON.parse(JSONSkills);

console.log(stringToJSONObject);

// solution 2
let age = 250;

let ageJSON = JSON.stringify(age);
console.log(ageJSON);

// Solution 3
let isMarried = true;
let marriedJSON = JSON.stringify(isMarried);
console.log(marriedJSON);

// Solution 4
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

let stringifyObject = JSON.stringify(student, (key, value) => {
  let newValue =
    typeof value === "string" && key !== "isMarried"
      ? value.toUpperCase()
      : value;
  return newValue;
});

console.log(stringifyObject);

//Exercises Level 2
/*
1)Stringify the students object with only firstName, lastName and skills properties
*/

// Solution 1
const txt = JSON.stringify(student, ["firstName", "lastName", "skills"], 4);
console.log(txt);

//Exercises Level 3
/*
1) Parse the txt JSON to object.
2) Find the the user who has many skills from the variable stored in txt.
*/

const usersText = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});

console.log(usersObj);

// Solution 2
const userSkills = JSON.parse(usersText, (key, value) => {
  if (key == "skill") return value;
});

console.log(userSkills);
