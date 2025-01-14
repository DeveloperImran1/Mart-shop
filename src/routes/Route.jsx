
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import HomeConainer from "../components/homePage/HomeConainer";


  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomeConainer></HomeConainer>
        },
  
      ]
    },
  ]);

  export default router;