import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NonLoggedInFrame from "./pages/NonLoggedInFrame";
import LoggedInFrame from "./pages/LoggedInFrame";
import Lobby from "./pages/Lobby";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/logged-in-frame":
        title = "";
        metaDescription = "";
        break;
      case "/lobby":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<NonLoggedInFrame />} />
      <Route path="/logged-in-frame" element={<LoggedInFrame />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
