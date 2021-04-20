import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      Layout
      {children}
      <Footer />
    </div>
  );
};
