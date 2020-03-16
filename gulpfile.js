/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible for creating
  multiple tasks, each task has been broken out into its own file in gulp/tasks.
  To add a new task, simply add a new task file the gulp directory.
*/

// List of all custom gulp tasks
const tasks = [
  './tools/gulp/dumbledore.js'
];

// Load each custom task
tasks.forEach((task) => {
  require(task); // eslint-disable-line
});
