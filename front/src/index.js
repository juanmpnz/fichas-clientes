import React from "react"
import ReactDOM from "react-dom"
import "./assets/index.scss";
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals"
import Main from "./Main"
import store from "./redux/index" 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>,
    </Provider>,
  document.getElementById("root")
)

reportWebVitals()
