import React from "react";
import { createBrowserRouter } from "react-router-dom";


import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";

const routes = createBrowserRouter([
  {
    path: "/",        // Home route
    element: <Home />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movie/:id",  
    element: <Movie />
  }
]);

export default routes;
