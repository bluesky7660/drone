import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { base_path } from "./environment";
import { HelmetProvider } from 'react-helmet-async'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import "../src/index.scss";
import Store from "./core/data/redux/store";
import { Provider } from "react-redux";
import "../src/style/icon/boxicons/boxicons/css/boxicons.min.css";
import "../src/style/icon/weather/weathericons.css";
import "../src/style/icon/typicons/typicons.css";
import "../src/style/icon/fontawesome/css/fontawesome.min.css";
import "../src/style/icon/fontawesome/css/all.min.css";
import "../src/style/icon/ionic/ionicons.css";
import "../src/style/icon/tabler-icons/webfont/tabler-icons.css";
import "../src/style/icon/feather/css/iconfont.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Mainapp from "./feature-module/router/router";
import {MemberProvider} from '@context/memberContext';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <HelmetProvider>
      <BrowserRouter basename={base_path} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MemberProvider>
          < Mainapp />
        </MemberProvider>
      </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
