import Input from "./components/Input";

const emailRegex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$");
function App() {
  return <Input type="email" validate={emailRegex} />;
}

export default App;
