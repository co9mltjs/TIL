let input = prompt("what would you like to do?");

const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("***************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  } else if(input === "delete") {
    const index = prompt("Ok, enter an index to delete")
    
  }
  input = prompt("what would you like to do?");
}
console.log("OK. Quit the App");
