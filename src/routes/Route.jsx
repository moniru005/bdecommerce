import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../layouts/Dashboard";
import AddReview from "../pages/Dashboard/AddReview";
import UpdateReview from "../pages/Dashboard/UpdateReview";
import Navbar from "../components/navbar/Navbar";
import Shop from "../pages/Shop";
import AddProduct from "../pages/Dashboard/AddProduct";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import ProductList from "../pages/Dashboard/ProductList";
import ProductDetails from "../components/ProductSections/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "productList",
        element: <ProductList />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct />,
      },
      {
        path: "addReview",
        element: <AddReview />,
      },
      {
        path: "updateReview",
        element: <UpdateReview />,
      },
      {
        path: "updateReview/:id",
        element: <UpdateReview />,
      },
    ],
  },
]);
