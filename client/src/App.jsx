import { Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./pages/_auth/forms/SignIn";
import SignUp from "./pages/_auth/forms/SignUp";
import Header from "./components/Header";
import Home from "./pages/_root/pages/Home";
import AuthLayout from "./pages/_auth/AuthLayout";
import RootLayout from "./pages/_root/RootLayout";

export default function App() {
  const location = useLocation();

  const fixedHeaderPages = ["/", "/signin", "/signup"];

  const isHeaderFixed = fixedHeaderPages.includes(location.pathname);

  return (
    <div style={{ paddingTop: isHeaderFixed ? "60px" : "0" }}>
      {isHeaderFixed && <Header />}
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home title={"Home"} />} />
          <Route path="*" element={<Home />}></Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn title={"Sign In"} />} />
          <Route path="/signup" element={<SignUp title={"Sign Up"} />} />
        </Route>
      </Routes>
    </div>
  );
}
