import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { useInstructorContext } from "@/context/intructor-context";
import { Delete, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";


const InstructorCourses = ({listOfCourses}) => {

  const navigate = useNavigate()
  const {
    setCurrentEditedCorseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useInstructorContext();



  return (
    <>
      <Card>
        <CardHeader className="flex justify-between flex-row items-center  ">
          <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
          <Button
            onClick={() => {
              setCurrentEditedCorseId(null)
              navigate("/instructor/create-new-course");
              setCourseCurriculumFormData(courseCurriculumInitialFormData)
              setCourseLandingFormData(courseLandingInitialFormData)
            }}
            className="p-6"
          >
            Create New Course
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listOfCourses && listOfCourses.length > 0
                  ? listOfCourses.map((course) => (
                      <TableRow key={course?._id}>
                        <TableCell className="font-medium">
                          {course?.title}
                        </TableCell>
                        <TableCell>{course?.setudents?.length}</TableCell>
                        <TableCell>${course?.pricing}</TableCell>
                        <TableCell className="text-right">
                        <Button
                          onClick={() => {
                            navigate(`/instructor/edit-course/${course?._id}`)
                          }}
                          variant="ghost" size="sm">
                            <Edit className="h-6 w-6" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Delete className="h-6 w-6" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default InstructorCourses;
