import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Root from "./components/Root.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Product from "./pages/Products/Product.jsx";
import AddProduct from "./pages/Products/AddProduct.jsx";
import User from "./pages/Users/User.jsx";
import { getUser } from "./redux/auth/AuthApi.js";
import AuthLayout from "./components/AuthLayout.jsx";
import UpdateProduct from "./pages/Products/UpdateProduct";
import { getProductById } from "./redux/product/ProductApi";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={async () => {
          try {
            const response = await store.dispatch(getUser()).unwrap();
            return response;
          } catch (rejectedValueOrSerializedError) {
            throw redirect("/");
          }
        }}
      >
        <Route path="product">
          <Route index element={<Product />} />
          <Route
            loader={async ({ params }) => {
              try {
                const response = await store
                  .dispatch(getProductById(params?.id))
                  .unwrap();
                return response;
              } catch (error) {
                return error;
              }
            }}
            path=":id"
            element={<UpdateProduct />}
          />
          <Route path="add" element={<AddProduct />} />
        </Route>

        <Route path="users">
          <Route index element={<User />} />
        </Route>
      </Route>

      <Route
        element={<AuthLayout />}
        loader={() => {
          const auth = JSON.parse(localStorage.getItem("auth"));
          if (auth) {
            throw redirect("/dashboard");
          }
          return null;
        }}
      >
        <Route index element={<Login />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
