import { Button, FormInput } from "./components";

function App() {
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
                placeholder="Old Password"/>
            </div>

            {/* Grid Row[3]; Form input new password  */}
            <div className="col-span-1">
              <FormInput 
                label={"New Password"}
                ariaLabel={"New Password"}
                elementName={"newPasswordFormInput"}
                placeholder="New Password"/>
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
              {/* Flex Box; Inline direction */}
              <div className="flex">
                <div>
                  <Button 
                    ariaLabel={"Cancel button"}
                    buttonType="default">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button 
                    ariaLabel={"Change password button"}
                    buttonType="primary">
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
