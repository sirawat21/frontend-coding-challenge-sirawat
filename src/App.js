import { useState } from "react";
import { Button, FormInput } from "./components";

function App() {
  /*** States ****/
  /* Form input value hooks */
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  /* Form input status hooks */
  const [isFormOldPasswordValid, setIsFormOldPasswordValid] = useState();
  const [isFormNewPasswordValid, setIsFormNewPasswordValid] = useState();

  /* Form input error message hooks */
  const [errorMessageOldPassword, setErorMessageOldPassword] = useState("");
  const [errorMessageNewPassword, setErorMessageNewPassword] = useState("");
  // error messages
  const errorMessage = {
    formOldPassword: "The old password is required.",
    formNewPassword: "Invalid new password; 8 characters minimum, mixture of numbers and letters.",
  };

  /*** Functions ***/
  /* Validate submit form for change password */
  const validateChangePassword = (event) => {
    event.preventDefault();

    /* Validate old password */ 
    // the input must not empty, input > 8
    if (oldPassword.trim().length < 8) {
      // if invalid set the status of old password form to Flase
      setIsFormOldPasswordValid(false);
      // set error message for old password form
      setErorMessageOldPassword(errorMessage.formOldPassword);
    } else {
      // if valid set the status of old password form to True 
      setIsFormOldPasswordValid(true);
      // remove an error message of old password form
      errorMessageOldPassword !== "" && errorMessageOldPassword("");
    }

    /* Validate new password */
    // the input must not empty, input > 8, and mixture of numbers and letters
    const regx = new RegExp(/^(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]+$/);
    if (newPassword.trim().length < 8 || !regx.test(newPassword)) {
      // if invalid set the status of new password form to Flase
      setIsFormNewPasswordValid(false);
      // set error message for new password form
      setErorMessageNewPassword(errorMessage.formNewPassword);
    } else {
      // if valid set the status of new password form to True 
      setIsFormNewPasswordValid(true);
      // remove an error message of new password form
      errorMessageNewPassword !== "" && setErorMessageNewPassword("");
    }

    /* If all inputs are valid */
    if (isFormOldPasswordValid === true && isFormNewPasswordValid === true) {
      // clear all state of previous inputs 
      setOldPassword("");
      setNewPassword("");
      // alert a success message
      alert("Change Password Success");
    }
  } // End of validateChangePassword function

  /*** Render ***/
  return (
    <div className="mx-auto mt-10 w-[500px]">
      <form>
        <fieldset>
          {/* Grid Table; contains 5 rows */}
          <div className="grid grid-row-5 grid-cols-1 p-1">

            {/* Grid Row[1]; Title */}
            <div className="col-span-1">
              <legend className="mobile:text-center desktop:text-left">
                <p aria-label="Change password form" className="text-[30px]">
                  Change Password
                </p>
              </legend>
            </div>

            {/* Grid Row[2]; Form input old password */}
            <div className="col-span-1">
              <FormInput 
                label={"Old Password"}
                elementName={"oldPasswordFormInput"}
                placeholder="Old Password"
                errorMessage={''}
                props={
                  {
                    required: true,
                    onChange: (event) => setOldPassword(event.target.value),
                  }
                }/>
            </div>

            {/* Grid Row[3]; Form input new password  */}
            <div className="col-span-1">
              <FormInput 
                label={"New Password"}
                elementName={"newPasswordFormInput"}
                errorMessage={''}
                props={
                  {
                    required: true,
                    onChange: (event) => setNewPassword(event.target.value),
                  }
                }/>
            </div>

            {/* Grid Row[4]; Form input confirm password  */}
            <div className="col-span-1">
              <FormInput
                label={"Confirm Password"}
                elementName={"confirmPasswordFormInput"}/>
            </div>

            {/* Grid Row[5]; Buttons */}
            <div className="col-span-1">
              {/* Flex Box; Grouping buttons inline direction */}
              <div className="flex relative">
                {/* Cancel Button */}
                <div className="mr-1">
                  <Button 
                    ariaLabel={"Cancel button"}
                    buttonType="default">
                    Cancel
                  </Button>
                </div>
                {/* Change Password Button */}
                <div className="desktop:relative mobile:absolute mobile:right-0">
                  <Button 
                    ariaLabel={"Change password button"}
                    buttonType="primary"
                    props={
                      {
                        type: "submit",
                        onClick: validateChangePassword,
                      }
                    }>
                    Change Password
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
