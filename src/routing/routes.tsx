// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "./HomePage";
// import TeamPage from "./TeamPage";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },

//   { path: "/team/", element: <TeamPage /> },
// ]);

// export default router;

import { createBrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const router = createBrowserRouter([
  {
    path: '*',
    element: <AnimatedRoutes />,
  },
]);

export default router;
