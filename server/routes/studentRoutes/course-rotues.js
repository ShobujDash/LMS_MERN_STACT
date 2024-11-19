const express = require("express");
const {
  getAllStudentViewCourses,
  getStudentViewDetails
} = require("../../controllers/studentController/CourseController");

const router = express.Router();


router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getStudentViewDetails);


module.exports = router;
