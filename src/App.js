import { useState } from "react";
import { Button, FormInput } from "./components";

function App() {
  /*** States ****/
  /* HookForm input hooks */
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  /*** Functions ***/
  /* Validate submit form for change password */
  const validateChangePassword = (event) => {
    event.preventDefault();
    // Validate old password
    if (oldPassword.trim().length < 8) {
      console.log('error: old password');
    } else { 
      console.log('valid: old password');
    }
    // Validate new password
    // When valide input
  }

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
                ariaLabel={"Old Password"}
                elementName={"oldPasswordFormInput"}
                placeholder="Old Password"
                props={
                  {
                    onChange: (event) => setOldPassword(event.target.value),
                  }
                }/>
            </div>

            {/* Grid Row[3]; Form input new password  */}
            <div className="col-span-1">
              <FormInput 
                label={"New Password"}
                ariaLabel={"New Password"}
                elementName={"newPasswordFormInput"}
                props={
                  {
                    onChange: (event) => setNewPassword(event.target.value),
                  }
                }/>
            </div>

            {/* Grid Row[4]; Form input confirm password  */}
            <div className="col-span-1">
              <FormInput
                label={"Confirm Password"}
                ariaLabel={"Confirm Password"}
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
