import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './component/Header.js';
import Timer from './component/Timer.js';
import MainPage from './page/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
      <Timer />
    </Router>
  );
}

export default App;
