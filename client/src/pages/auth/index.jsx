import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { signInFormControlles, signUpFormControlles } from "@/config";
import { useAuthContext } from "@/context/auth-context";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTabs] = useState("signin");

  const {
    signInFromData,
    setSignInFromData,
    signUpFromData,
    setSignUpFromData,
  } = useAuthContext();

  function handleTabChange(value) {
    setActiveTabs(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFromData &&
      signInFromData.userEmail !== "" &&
      signInFromData.password !== ""
    );
  }
  function checkIfSignUpFormIsValid() {
    return (
      signUpFromData &&
      signUpFromData.userName !== "" &&
      signUpFromData.userEmail !== "" &&
      signUpFromData.password !== ""
    );
  }

  // console.log(signInFromData)
  console.log(signUpFromData);

  return (
    <div className="flex flex-col min-h-screen">
      <header className=" px-4 lg:px-6 h-14 flex items-center">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS LEARN</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 border-b-2 pb-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-5 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommonForm
                  formControls={signInFormControlles}
                  buttonText={"Sign In"}
                  formData={signInFromData}
                  setFormData={setSignInFromData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-5 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter you details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommonForm
                  formControls={signUpFormControlles}
                  buttonText={"Sign Up"}
                  formData={signUpFromData}
                  setFormData={setSignUpFromData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
