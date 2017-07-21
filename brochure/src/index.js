import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PrinciplesPage from './components/Principles/PrinciplesPage';
import ColorsPage from './components/ColorsPage/ColorsPage';
import IconsPage from './components/IconsPage/IconsPage';
import TypographyPage from './components/TypographyPage/TypographyPage';
import TablePage from './components/TablePage/TablePage';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/Nav/Nav.js';

const Root = () => {
  return (
        <BrowserRouter>
          <div className="container">
            <Nav />
            <div className="content-wrapper">
              <Route exact path="/" component={App} />
              <Route exact path="/principles" component={PrinciplesPage} />
              <Route exact path="/colors" component={ColorsPage} />
              <Route exact path="/icons" component={IconsPage} />
              <Route exact path="/table" component={TablePage} />
              <Route exact path="/typography" component={TypographyPage} />
            </div>
          </div>
        </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
