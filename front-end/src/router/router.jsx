import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home/indx";
import RootPage from "../pages/RootPage";

export const ROOT = [
    {
        path: "/",
        element: <RootPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "add-page",
                element: <Add />,
            },
            {
                path: "basket",
                element: <Basket />,
            },
            {
                path: "detail/:id",
                element: <Detail/>,
            },
        ],
    },
];
