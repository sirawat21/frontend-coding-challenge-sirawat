import { Button, FormInput } from "./components";

function App() {
  return (
    <div>
      {/* Grid Table; contains 5 rows */}
      <div className="grid grid-row-5 grid-cols-1">
        {/* [1] Grid Row; Title */}
        <div className="col-span-1">
          <p className="text-[30px]">Change Password</p>
        </div>
        {/* [2] Grid Row; Form input old password */}
        <div className="col-span-1">
          <FormInput placeholder="Old Password" />
        </div>
        {/* [3] Grid Row; Form input new password  */}
        <div className="col-span-1">
          <FormInput placeholder="New Password" />
        </div>
        {/* [4] Grid Row; Form input confirm password  */}
        <div className="col-span-1">
          <FormInput placeholder="Confirm Password" />
        </div>
        {/* [5] Grid Row; Buttons */}
        <div className="col-span-1">
          <Button buttonType="default">Cancel</Button>
          <Button buttonType="primary">Change Password</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
