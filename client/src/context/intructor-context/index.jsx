import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { createContext, useContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );

  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );

  const [mediaUploadProgress, setMediaUploadProgress] = useState(false);

  const [mediaUploadProgresPercentage, setMediaUploadProgresPercentage] = useState(0);
  const [instructorCourseList,setInstructorCourseList] = useState([]);
  const [currentEditedCorseId, setCurrentEditedCorseId] = useState(null);

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormData,
        setCourseCurriculumFormData,
        mediaUploadProgress,
        setMediaUploadProgress,
        mediaUploadProgresPercentage,
        setMediaUploadProgresPercentage,
        instructorCourseList,
        setInstructorCourseList,
        currentEditedCorseId,
        setCurrentEditedCorseId,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}

export const useInstructorContext = () => {
  return useContext(InstructorContext);
};
