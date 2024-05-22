import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ROOT} from './router/router.jsx'
import ContextProvider from "./context/context.jsx";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const rooter = createBrowserRouter(ROOT);
    return <>
    <ContextProvider>
      <RouterProvider router={rooter}/></ContextProvider>
     </>;
}

export default App;
