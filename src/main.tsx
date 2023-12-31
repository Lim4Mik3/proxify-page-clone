import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import "./styles/global.css";

const rootComponent = document.getElementById("root");

if (!rootComponent) throw new Error("A root component must to be provided");

ReactDOM.createRoot(rootComponent).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
