import { getDatabase, ref, set } from "firebase/database";
import "./App.css";
import { RegisterUser } from "./Components/RegisterUser";

function App() {
 return (
  <>
   <RegisterUser />
  </>
 );
}

export default App;
