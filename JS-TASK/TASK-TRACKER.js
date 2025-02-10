const tasks = [
    { taskName: "Write report", completed: true, priority: 2 },
    { taskName: "Attend meeting", completed: false, priority: 3 },
    { taskName: "Fix bug", completed: false, priority: 1 },
    { taskName: "Update website", completed: true, priority: 4 }
];

const highPriorityTask = tasks.find(task => task.priority < 3);
console.log("High-priority task found:", highPriorityTask);

const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log("First incomplete task index:", firstIncompleteIndex);

const completedTaskCount = tasks.reduce((count, task) => {
    return task.completed ? count + 1 : count;
}, 0);
console.log("Total completed tasks:", completedTaskCount);

console.log("\nTask list:");
tasks.forEach(task => {
    console.log(`- ${task.taskName}`);
});

console.log("\nTask details:");
tasks.forEach(task => {
    console.log(
        `Task: ${task.taskName} | ` +
        `Priority: ${task.priority} | ` +
        `Status: ${task.completed ? 'Done' : 'Not Done'}`
    );
});