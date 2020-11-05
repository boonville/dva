import dva from "dva";
import "./index.scss";
import { createBrowserHistory as createHistory } from "history";
// 1. Initialize
const app = dva({
  history: createHistory(),
  initialState: {},
});

// 2. Plugins
// app.use({}); app.model(key.default))

// 3. 整合 Models
console.log("%c 整合 Models，避免代码臃肿", "color:yellow;font-size:25px;");
require("./models").default.forEach((key) => app.model(key.default));

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
