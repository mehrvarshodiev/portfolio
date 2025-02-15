import { lazy, Suspense } from "react";
import "./App.css";
import { useSelector } from "react-redux";
const Preloader = lazy(() => import("./components/Preloader/Preloader"));
const Header = lazy(() => import("./components/pages/Header/Header"));
const Home = lazy(() => import("./components/pages/Home/Home"));
const About = lazy(() => import("./components/pages/About/About"));
const Certificates = lazy(() =>
  import("./components/pages/Certificates/Certificates")
);
const Projects = lazy(() => import("./components/pages/Projects/Projects"));
const Contacts = lazy(() => import("./components/pages/Contacts/Contacts"));

const App = () => {
  const theme = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`container ${theme ? "dark" : "light"}`}>
      <div className="wrapper">
        <Suspense fallback={<Preloader />}>
          <Header />
          <Home />
          <About />
          <Certificates />
          <Projects />
          <Contacts />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
