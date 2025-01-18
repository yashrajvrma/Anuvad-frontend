import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import MyBlogs from "./pages/MyBlogsPage";
import CreateBlog from "./pages/CreateBlog";
import DraftPage from "./pages/DraftPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs" element={<MyBlogs />} />
          <Route path="/draft" element={<DraftPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
