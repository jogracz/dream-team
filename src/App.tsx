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
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">               
                <About />
              </Route>
              <Route path="/my-pictures">
                <MyPictures />
              </Route>
              <Route path="/buy">
                <Buy />
              </Route>
              <Route path="/achievements">
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
