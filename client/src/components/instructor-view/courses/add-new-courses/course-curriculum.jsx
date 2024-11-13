import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData } from "@/config";
import { useInstructorContext } from "@/context/intructor-context";
import { mediaUploadService } from "@/services";

const CourseCurriculum = () => {
  const {
    courseCurriculumFormData,
    setCourseCurriculumFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
  } = useInstructorContext();


  const handleNewLecture = () => {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0]
      }
    ])
  }

  const handleCourseTitleChange = (e,currentIndex) => {
    let copyCourseCurriculumFormData = [...courseCurriculumFormData];
    
    copyCourseCurriculumFormData[currentIndex] = {
      ...copyCourseCurriculumFormData[currentIndex],
      title: e.target.value
    };

    setCourseCurriculumFormData(copyCourseCurriculumFormData)
  }

  const handleFreePreviewChange = (currValue, currentIndex) => {
    let copyCourseCurriculumFormData = [...courseCurriculumFormData];

    copyCourseCurriculumFormData[currentIndex] = {
      ...copyCourseCurriculumFormData[currentIndex],
      freePreview: currValue,
    };

    setCourseCurriculumFormData(copyCourseCurriculumFormData);
  };

  const handleSingleLectureUpload = async(e,currentIndex) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const videoFormData = new FormData();
      videoFormData.append('file', selectedFile)
    
      
      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(videoFormData);

        console.log(response,'response')

      } catch (error) {
        console.log(error)
      }

    }
  }



  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleNewLecture}>Add Lecture</Button>
        <div className="mt-4 space-y-4">
          {courseCurriculumFormData.map((curriculumItem, index) => (
            <div key={index} className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">Lecture {index + 1}</h3>
                <Input
                  name={`title-${index + 1}`}
                  placeholder="Enter lecture title"
                  className="max-w-96"
                  onChange={(e) => handleCourseTitleChange(e, index)}
                  value={courseCurriculumFormData[index]?.title}
                />
                <div className="flex items-center space-x-2">
                  <Switch
                    onCheckedChange={(value)=>handleFreePreviewChange(value,index)}
                    checked={courseCurriculumFormData[index].freePreview} id={`freePreview-${index + 1}`} />
                  <Label htmlFor={`freePreview-${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
              </div>
              <div className="mt-6">
                <Input
                  onChange={(e)=>handleSingleLectureUpload(e,index)}
                  type='file'
                  accept="video/*"
                  className='mb-4'
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCurriculum;
