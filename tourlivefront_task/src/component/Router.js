import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";

import Header from "./Header";

import HomeScreen from "../routes/Home";
import DetailScreen from "../routes/Detail";

export default () => (
  <Router>
    <>
      <Layout
        className="layout"
        style={{ minHeight: "100vh", background: "none" }}
      >
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/detail/:id" exact component={DetailScreen} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </>
  </Router>
);
