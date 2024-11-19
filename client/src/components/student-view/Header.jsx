import { GraduationCap, TvMinimalPlay } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAuthContext } from '@/context/auth-context'



const StudentViewCommonHeader = () => {
    const { resetCredentials } = useAuthContext();

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };



  return (
    <header>
      <div className="flex items-center justify-between p-4 border-b relative">
        <div className="flex items-center space-x-4">
          <Link to={"/home"}>
            <GraduationCap className="h-8 w-8 mr-4 hover:text-black" />
            <span className="font-extrabold md:text-xl text-[14px]">
              LMS LERN
            </span>
          </Link>
          <div className="flex items-center skew-x-1">
            <Button
              variant="ghost"
              className="text-[14px] md:text-[16px] font-medium"
            >
              Explore Courses
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-3">
              <span className="font-extrabold md:text-xl text-[14px]">
                {" "}
                MY Courses
              </span>
              <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
            </div>
            <Button onClick={handleLogout}>Sing Out</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader
