import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import AddBlogPage from "./pages/AddBlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./App";
import AuthedPageWrapper from "./components/auth/AuthedPageWrapper";

export const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />, // Moved inside the Layout
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/new",
        element: (
          <AuthedPageWrapper>
            <AddBlogPage />
          </AuthedPageWrapper>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
];
