import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/context/auth-context';
import React from 'react'

const StudentHomePage = () => {
  const { resetCredentials } = useAuthContext();
  
  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };



  return (
    <div>
      Home Page
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default StudentHomePage
