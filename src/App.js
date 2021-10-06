import "./styles/App.css";
import "font-awesome/css/font-awesome.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
