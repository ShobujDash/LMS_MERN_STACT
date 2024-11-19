import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}

export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuthService() {
  const { data } = await axiosInstance.get("/auth/check-auth");

  return data;
}


// video upload / media serviece
export async function mediaUploadService(formData,onProgressCallback) {
  const { data } = await axiosInstance.post("/media/upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}


// delete video form cloudinary
export async function mediaDeleteService(id) {
  const { data } = await axiosInstance.delete(`/media/delete/${id}`);

  return data;
}


// fetch course for instructor
export async function fetchInstructorCorseListService() {
  const { data } = await axiosInstance.get(`/instructor/course/get`);

  return data;
} 
// add coruse 
export async function addNewCourseService(formData) {
   const { data } = await axiosInstance.post(`/instructor/course/add`,formData);

   return data;
} 
// get course details
export async function fetchInstructorCorseDetailsService(id) {
  const { data } = await axiosInstance.get(
    `/instructor/course/get/details/${id}`
  );

  return data;
} 
// updatecourse
export async function updateCorseByIdService(id,formData) {
  const { data } = await axiosInstance.put(`/instructor/course/update/${id}`,formData);

  return data;
} 


// bulk multiple video upload / media serviece
export async function mediaBulkUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}
