import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  About,
  Home,
  MyPictures,
  Buy,
  Achievements,
  NotFound
} from './components/pages';
import { 
  SiteWrapper,
  Header,
  Sidebar,
  SiteContent,
  Footer,
 } from './components/MainUI';
import { AppProvider } from './context/AppContext/AppContext';
import { GameProvider } from './context/GameContext/GameContext';

export const sitePrefix = '/dream-team';

const App = () => {
  return (
    <AppProvider>
      <GameProvider>
        <Router>
        <SiteWrapper>
          <Header />
          <SiteContent>
            <Sidebar />
            <Switch>
              <Route exact path={`${sitePrefix}/`}>
                <Home />
              </Route>
              <Route path={`${sitePrefix}/about`}>               
                <About />
              </Route>
              <Route path={`${sitePrefix}/my-pictures`}>
                <MyPictures />
              </Route>
              <Route path={`${sitePrefix}/buy`}>
                <Buy />
              </Route>
              <Route path={`${sitePrefix}/achievements`}>
                <Achievements />
              </Route>
              <Route path="*">
              <NotFound />
            </Route>
            </Switch>
          </SiteContent>
          <Footer />
        </SiteWrapper>
        </Router>
      </GameProvider>
    </AppProvider>
  );
}

export default App;
