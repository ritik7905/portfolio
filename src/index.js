import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import App from "./App";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(<>
    <Router>
        <App />
    </Router>
</>, document.getElementById('root'));