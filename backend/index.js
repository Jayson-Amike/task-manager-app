//import packaged
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//set up enviroment
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//array of task
let tasks = [];

//gets the task from the sever
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

//imports the task from the sever
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.json({ success: true });
});

//delete the task from the sever
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task, index) => index !== parseInt(id));
  res.json({ success: true });
});

//check if the sever is  running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
