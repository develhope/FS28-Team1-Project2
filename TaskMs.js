//1- Initialize an empty array named tasks to store task names.
const task = ["Task 1", "Task 2", "Task 3", "Task 4"];

//2-* Function to Add a Task:
// * Define a function named addTask that takes two parameters:
// * task: A string representing the task to add.
// * callback: A callback function to handle the result.(FIAMMA)

// Inside the addTask function, use setTimeout to simulate an asynchronous operation.
// // * If the task parameter is empty or not a string, invoke the callback function with
// an Error object containing the message "Task must be a non-empty string".
// // * Otherwise, add the task to the tasks array and invoke the callback function with null
// as the first parameter and the message "Task added successfully" as the second parameter.(GIOVANNI)

//3-Function to Complete a Task:
// ### Define a function named completeTask that takes two parameters:
// * index: An integer representing the index of the task to complete.
// * callback: A callback function to handle the result.(FRANK)
// Inside the completeTask function, use setTimeout to simulate an asynchronous operation.
// If the index parameter is out of range (less than 0 or greater than or equal to the length of the tasks array),
// invoke the callback function with an Error object containing the message "Invalid task index".
// Otherwise, remove the task at the specified index from the tasks array and invoke the callback function with null
// as the first parameter and the message "Task completed successfully" as the second parameter.(ADAMO)

function completeTask(index, callback) {
  setTimeout(() => {
    if (index < 0 || index >= task.length) {
      callback(new Error("Invalid task index"));
    } else {
      task.splice(index, 1);
      callback(null, "Task completed successfully");
    }
  }, 1000);
};

function handleResult(error, message) {
  if (error) {
    console.error(error.message);
  } else {
    console.log(message);
  }
};

completeTask(1, handleResult);
completeTask(10, handleResult);

//4-Function to List Tasks:
// Define a function named listTasks that does not take any parameters.
// Inside the listTasks function, log each task in the tasks array to the console, along with its corresponding index.(DAVID)


