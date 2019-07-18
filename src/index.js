
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Redux/Reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
const hamroStore = createStore(Reducer);
// require('react-web-vector-icons/fonts');
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={hamroStore}>
    <Router basename="marinity_seller">
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
