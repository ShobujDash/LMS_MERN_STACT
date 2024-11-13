import FromControls from '@/components/common-form/form-controlles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courseLandingPageFormControls } from '@/config';
import { useInstructorContext } from '@/context/intructor-context';
import React from 'react'

const CourseLanding = () => {

  const { courseLandingFormData, setCourseLandingFormData } = useInstructorContext();


  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
     </CardHeader>
      <CardContent>
        <FromControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />
     </CardContent>
    </Card>
  )
}

export default CourseLanding;
