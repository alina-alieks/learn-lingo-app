import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import Teachers from "../../pages/Teachers/Teachers";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
