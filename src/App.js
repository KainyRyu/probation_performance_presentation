import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import MainPage from './page/MainPage';
import IntroPage from './page/IntroPage.js';
import WorkPage from './page/WorkPage';
import PerformancePage from './page/PerformancePage';

function App() {
  return (
    <AppWrapper>
      <MainPage />
      <IntroPage />
      <WorkPage />
      <PerformancePage />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 10px 20px;
  height: 100vh;
`;
