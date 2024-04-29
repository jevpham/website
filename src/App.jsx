import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
