const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../controllers/taskController");

router.route("/").get(protect, getTasks).post(protect, createTask);
router
  .route("/:id")
  .put(protect, updateTask)
  .delete(protect, deleteTask)
  .get(protect, getSingleTask);

module.exports = router;
