import { signUpFormControlles } from "@/config";
import { Button } from "../ui/button";
import FromControls from "./form-controlles";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* render form controls here */}
        <FromControls
          formControls={formControls}
          formData={formData}
          setFormData={setFormData}
        />
        <Button disabled={isButtonDisabled} className="mt-5 w-full" type="submit">
          {buttonText || "Submit"}
        </Button>
      </form>
    </>
  );
};

export default CommonForm;
