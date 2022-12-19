import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
// url에 변수로 받아 오기 ':' 사용 <Route path = "/movie/:id">
function App() {
  return <Router>
    <Switch>
      <Route path = "/movie/:id">
        <Detail />
      </Route>
      <Route path = "/">
        <Home />
      </Route>

    </Switch>
  </Router>
}

export default App;
