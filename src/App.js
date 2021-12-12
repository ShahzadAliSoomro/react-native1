import "./App.css";
import Posts from "./components/posts";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import CreatePost from "./components/createPost";
import Header from "./components/header";
import Login from "./components/login";
import Post from "./components/post";
import Portfolio from "./components/portfolio";
import SignUp from "./components/signup";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex">
        <div className="w-1/12 hidden md:block lg:block">
          <div className="fixed left-0 top-0 w-32">
            <Header />
          </div>
        </div>
        <div className="w-11/12">
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Portfolio} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/create" component={CreatePost} />
              <Route exact path="/post" component={Posts} />
              <Route exact path="/post/:slug" component={Post} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>

      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </>
  );
}

export default App;
