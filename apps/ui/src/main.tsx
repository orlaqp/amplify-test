import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import App from "./app/app";

import { Amplify } from 'aws-amplify';
import { environment } from './environments/environment';
Amplify.configure(environment);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
