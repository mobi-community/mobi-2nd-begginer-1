import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { GlobalStyles } from "./style/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
