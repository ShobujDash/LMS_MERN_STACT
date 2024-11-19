const Course = require("../../models/Course");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const coursesList = await Course.find({});

    if (coursesList.length === 0) {
      return res.status(404).json({
        message: false,
        message: "No Course found.",
        data: [],
      });
    }
    res.status(200).json({
      message: true,
      data: coursesList
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getStudentViewDetails = async (req, res) => {
  try {

    const { id } = req.params;

     const coursesDetails = await Course.findById(id);

     if (!coursesList) {
       return res.status(404).json({
         message: false,
         message: "No Course Details found.",
         data: [],
       });
     }
     res.status(200).json({
       message: true,
       data: coursesDetails
     });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};


module.exports = { getAllStudentViewCourses, getStudentViewDetails };