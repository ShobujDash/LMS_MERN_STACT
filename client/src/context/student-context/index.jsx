import { createContext, useContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [sutdentCoursesList, setSutdentCoursesList] = useState([]);

  return (
    <StudentContext.Provider
      value={{ sutdentCoursesList, setSutdentCoursesList }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export const useStudentContext = () => {
  return useContext(StudentContext);
};
