const Course = require("../../models/Course");

// add course
const addNewCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const newlyCreatedCourse = new Course(courseData);
    const saveCourse = await newlyCreatedCourse.save();

    if (saveCourse) {
      res.status(201).json({
        success: true,
        message: "Course Saved Successfully",
        data: saveCourse,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

// get all course
const getAllCourses = async (req, res) => {
  try {
    const coursesList = await Course.find({});
    res.status(200).json({
      success: true,
      data: coursesList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

// get course Details
const getCourseDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await Course.findById(id);

    if (!courseDetails) {
      res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: courseDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

// Update Course
const updateCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const updataedCourseData = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      updataedCourseData,
      { new: true }
    );

    if (!updatedCourse) {
      res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Updated Successfully.",
      data: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  addNewCourse,
  getAllCourses,
  getCourseDetailsById,
  updateCourseById,
};
