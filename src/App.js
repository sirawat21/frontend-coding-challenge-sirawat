import { useState } from "react";
import { Button, FormInput } from "./components";

function App() {
  /*** States ****/
  /* Form input value hooks */
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  /* Form input valid status hooks */
  const [isFormOldPasswordValid, setIsFormOldPasswordValid] = useState(true);
  const [isFormNewPasswordValid, setIsFormNewPasswordValid] = useState(true);

  /*** Functions ***/
  /* Validate submit form for change password */
  const validateChangePassword = (event) => {
    event.preventDefault();
    /* Validate old password */ 
    // the input must not empty, input > 8
    if (oldPassword.trim().length < 8) {
      // if invalid set the status of old password form to Flase
      setIsFormOldPasswordValid(false);
      console.log('error: old password');
    } else {
      // if valid set the status of old password form to True 
      setIsFormOldPasswordValid(true);
      console.log('valid: old password');
    }
    /* Validate new password */
    // the input must not empty, input > 8, and mixture of numbers and letters
    const regx = new RegExp(/^(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]+$/);
    if (newPassword.trim().length < 8 || !regx.test(newPassword)) {
      // if invalid set the status of new password form to Flase
      setIsFormNewPasswordValid(false);
      console.log('error: new password');
    } else {
      // if valid set the status of new password form to True 
      setIsFormNewPasswordValid(true);
      console.log('valid: new password');
    }
    // When valide input
    if (isFormOldPasswordValid === true && isFormNewPasswordValid === true) {
      // clear all state of previous inputs 
      setOldPassword("");
      setNewPassword("");
      // alert a success message
      alert("Change Password Success");
    }
  } // End of validateChangePassword function //

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
                elementName={"confirmPasswordFormInput"} 
                placeholder="Confirm Password"/>
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
