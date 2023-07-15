import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom/client";
import "./index.css";

import App from './App'
// const MyLazy = lazy(() => import('./routes/root'));
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App />)
