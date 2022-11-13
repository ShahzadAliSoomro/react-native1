import "./App.css";
import Posts from "./components/posts";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/createPost";
import Header from "./components/header";
import Login from "./components/login";
import Post from "./components/post";
import Portfolio from "./components/portfolio";
import SignUp from "./components/signup";
import SkillPage from "./components/skillPage";
import MousePosition from "./components/cursorPointer";

const router = createBrowserRouter([{ path: "/", element: <Portfolio /> }]);
function App() {
  // const location = useLocation();

  return (
    <>
      <MousePosition />
      <div className="flex">
        <div className="w-1/12 hidden md:block lg:block">
          <div className="fixed left-0 top-0 w-32">
            <Header />
          </div>
        </div>
        <div className="w-11/12 overflow-hidden">
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
          {/* <RouterProvider router={router} /> */}
          {/* <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" component={Portfolio} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/skills" component={SkillPage} />
              <Route exact path="/create" component={CreatePost} />
              <Route exact path="/post" component={Posts} />
              <Route exact path="/post/:slug" component={Post} />
            </Routes>
          </AnimatePresence> */}
        </div>
      </div>

      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </>
  );
}

export default App;
