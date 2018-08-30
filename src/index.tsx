/**
 * Entry point for the React & Typescript Boilerplate
 * @module
 */
import "./index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./components/App";
import {ScrollToTop} from "./components/helpers/ScrollToTop";

/**
 * Creates the entire top-level structure of the application, using the specified root component.
 * @returns JSX.Element
 */
function createAppElement(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </BrowserRouter>
  );
}

ReactDOM.render(createAppElement(), document.getElementById("root"));
