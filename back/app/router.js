const express = require("express");
const router = express.Router();
const taskController = require("./controllers/task");

// Route pour la liste des taches
router.get("/tasks", taskController.listTasks);

// Route pour ajouter une tache
router.post("/tasks", taskController.postTask);

// Route pour modifier une tache

// Route pour supprimer une tache

module.exports = router;

/* 
/tasks 	GET 	Récupère la liste des tâches 	Liste des tâches
/tasks 	POST 	Ajoute une nouvelle tâche 	Tâche créée
/tasks/:id 	PATCH 	Modifie une tâche 	Tâche modifiée
/tasks/:id 	DELETE 	Supprime une tâche 	Aucune donnée renvoyée
*/
// pensez à retourner les code HTTP appropriés
