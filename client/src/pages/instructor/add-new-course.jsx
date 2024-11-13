import CourseCurriculum from "@/components/instructor-view/courses/add-new-courses/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-courses/course-landing-page";
import CourseSettings from "@/components/instructor-view/courses/add-new-courses/course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const AddNewCoursePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Create a new course</h1>
        <Button className="text-sm tracking-wider font-bold px-8">
          Submit
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList>
                <TabsTrigger className="p-2 shadow-md mr-2" value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger className="p-2 shadow-md mr-2" value="course-landing-page">
                  Coruse Landing Page
                </TabsTrigger>
                <TabsTrigger className="p-2 shadow-md mr-2" value="settings">Settings</TabsTrigger>
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
