import "./App.css";

import Posts from "./components/posts";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePost from "./components/createPost";
import Header from "./components/header";
import Login from "./components/login";

import Post from "./components/post";
import Portfolio from "./components/portfolio";
import SignUp from "./components/signup";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* screen */}
        {/* Portfolio */}
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/create">
          <CreatePost />
        </Route>
        <Route exact path="/post">
          <Posts />
        </Route>
        <Route exact path="/post/:slug">
          <Post />
        </Route>
      </Switch>

      <ReactQueryDevtools initialIsOpen={true} />
    </BrowserRouter>
  );
}

export default App;
