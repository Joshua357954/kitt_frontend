import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import AuthScreen from "./screens/AuthScreen.jsx"
import HomeScreen from "./screens/HomeScreen.jsx"
import AssignmentScreen from "./screens/AssignmentScreen.jsx"
import AnnouncementScreen from "./screens/AnnouncementScreen.jsx"
import TimetableScreen from "./screens/TimetableScreen.jsx"
import MaterialScreen from "./screens/MaterialScreen.jsx"
import ForumScreen from "./screens/ForumScreen.jsx"
import PostScreen from "./screens/PostScreen.jsx"
import MonitizationScreen from "./screens/MonitizationScreen.jsx"

const router = createBrowserRouter([
    
    {
      path: "/home",
      element: <HomeScreen />,
    },

    {
      path: "/",
      element: <AuthScreen />,
    },


    {
      path: "/assignment",
      element: <AssignmentScreen />,
    },

    {
      path: "/timetable",
      element: <TimetableScreen />,
    },

        {
      path: "/post",
      element: <PostScreen />,
    },

    {
      path: "/materials",
      element: <MaterialScreen />,
    },


    {
      path: "/notice",
      element: <AnnouncementScreen />,
    },


    {
      path: "/forum",
      element: <ForumScreen />,
    },

    {
      path: "/monitization",
      element: <MonitizationScreen />,
    },

])


export default router
