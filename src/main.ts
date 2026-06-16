import "./index.css";

import "./router.js";

import { homePanel } from "./pages/home-page/page.js";
import { playingPanel } from "./pages/playing-page/page.js";

homePanel.dataset.index = "0";
playingPanel.dataset.index = "1";
