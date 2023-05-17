import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { MyCart } from "../pages/MyCart";
import { MyOrders } from "../pages/MyOrders";
import { About } from "../pages/About";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/products/:id" element={<About />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
    </div>
  );
};
