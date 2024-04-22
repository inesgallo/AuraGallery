import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/privatePages/AdminDashboard";
import ArtistDashboard from "../pages/privatePages/ArtistDashboard";
import LayoutAdmin from "../layout/LayoutAdmin";
import LayoutArtist from "../layout/LayoutArtist";
import LayoutPublic from "../layout/LayoutPublic";
import Login from "../pages/publicPages/Login";
import ArtDetail from "../pages/publicPages/ArtDetail";
import ShoppingCart from "../pages/publicPages/ShoppingCart";
import Home from "../pages/publicPages/Home";



export const routerProvider = createBrowserRouter([
  {
    path: "/artist",
    element: <LayoutArtist />,
    children: [
      {
        path: "/artist/dashboard",
        element: <ArtistDashboard />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
  
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Artdetail/:id",
        element: <ArtDetail />,
      },
      {
        // path: "/shopping/:id",
        path: "/shopping",
        element: <ShoppingCart />,
      },
    ],
  },
]);
