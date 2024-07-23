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
};

module.exports = taskController;
