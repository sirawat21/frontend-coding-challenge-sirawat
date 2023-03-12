import { Button, FormInput } from "./components";

function App() {
  return (
    <div>
      <FormInput placeholder="Old Password" />
      <FormInput placeholder="New Password" />
      <FormInput placeholder="Confirm Password" />
      <Button>
        Cancel
      </Button>
      <Button>
        Change Password
      </Button>
    </div>
  );
}

export default App;
