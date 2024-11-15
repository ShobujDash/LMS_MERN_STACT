import CourseCurriculum from "@/components/instructor-view/courses/add-new-courses/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-courses/course-landing-page";
import CourseSettings from "@/components/instructor-view/courses/add-new-courses/course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { useAuthContext } from "@/context/auth-context";
import { useInstructorContext } from "@/context/intructor-context";
import { addNewCourseService } from "@/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useNavigate, useParams } from "react-router-dom";

const AddNewCoursePage = () => {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCorseId,
    setCurrentEditedCorseId,
  } = useInstructorContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  const params = useParams()
  console.log(params)

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true; //found at least one free preview
      }
    }

    return hasFreePreview;
  }

  const handleCreateCourse = async () => {
    const courseFinalFromData = {
      instructorId: auth?.user?._id,
      isntructorName: auth?.user?.userName,
      data: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublished: true,
    };

    const respones = await addNewCourseService(courseFinalFromData);

    if (respones?.success) {
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      setCourseLandingFormData(courseLandingInitialFormData);
      navigate(-1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Create a new course</h1>
        <Button
          disabled={!validateFormData()}
          onClick={handleCreateCourse}
          className="text-sm tracking-wider font-bold px-8"
        >
          Submit
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList>
                <TabsTrigger className="p-2 shadow-md mr-2" value="curriculum">
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  className="p-2 shadow-md mr-2"
                  value="course-landing-page"
                >
                  Coruse Landing Page
                </TabsTrigger>
                <TabsTrigger className="p-2 shadow-md mr-2" value="settings">
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value="course-landing-page">
                <CourseLanding />
              </TabsContent>
              <TabsContent value="settings">
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewCoursePage;
