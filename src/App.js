import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Header from './component/Header.js';
import MainPage from './page/MainPage';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 10px;
`;
