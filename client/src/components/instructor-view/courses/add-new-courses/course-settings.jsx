import MediaProgressbar from "@/components/media-progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInstructorContext } from "@/context/intructor-context";
import { mediaUploadService } from "@/services";

const CourseSettings = () => {
  const {
    mediaUploadProgress,
    setMediaUploadProgress,
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgresPercentage,
    setMediaUploadProgresPercentage,
  } = useInstructorContext();

  const handleImageUploadChange = async (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgresPercentage
        );

        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response?.data?.url,
          });
          setMediaUploadProgress(false)
        }
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      {mediaUploadProgress ? (
        <MediaProgressbar
          isMediaUploading={mediaUploadProgress}
          progress={mediaUploadProgresPercentage}
        />
      ) : null}
      <CardContent>
        {courseLandingFormData?.image ? (
          <img src={courseLandingFormData?.image} alt="" />
        ) : (
          <div className="flex flex-col gap-3">
            <Label>Upload Corse Image</Label>
            <Input
              onChange={(e) => handleImageUploadChange(e)}
              type="file"
              accept="image/*"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseSettings;
