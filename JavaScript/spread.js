const user = {
  email: "cogmltjs@gmail.com",
  password: "062529",
  firstName: "Heesun",
  lastName: "Chae",
  born: 1995,
  bio: "Heesun Chae is ZZANG",
  city: "Busan",
  state: "Hwa-myeong",
};

// const firstName = user.firstName;
// const lastName = user.lastName;

const { email, firstName, lastName, born: birthYear } = user;
