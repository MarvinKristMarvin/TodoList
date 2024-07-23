const { Task } = require("../models");

const taskController = {
  listTasks: async function (req, res) {
    const taskList = await Task.findAll();
    // Récupérer la liste des taches
    taskList.forEach((task) => {
      console.log(task.dataValues);
    });
    // Renvoyer la liste des taches en json
    res.json(taskList);
  },

  postTask: async function (req, res) {
    const userInput = req.body;
    const task = await Task.create(userInput);
    res.status(201).json(task);
  },

  patchTask: async function (req, res, next) {
    const { id } = req.params;
    const userInput = req.body;
    const [, tasks] = await Task.update(userInput, {
      where: { id },
      returning: true,
    });

    if (!tasks || !tasks.length) {
      return next();
    }

    const [task] = tasks;

    res.json(task);
  },
};

module.exports = taskController;
