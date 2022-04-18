const express = require("express");
const {
  getAllProjects,
  getAdminProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectDetails,
} = require("../controllers/projectController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/projects").get(getAllProjects);

router
  .route("/admin/projects")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProjects);

router
  .route("/admin/project/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProject);

router
  .route("/admin/project/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProject)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProject);

router.route("/project/:id").get(getProjectDetails);

module.exports = router;
