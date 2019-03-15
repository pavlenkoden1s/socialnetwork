import React from 'react';
import './App.scss';
import { TopmenuItem } from './components/topmenu';
import { routes } from './routes';
import { Route } from 'react-router';
import { Topmenu } from './containers/topmenuContainer';

export class App extends React.Component<{},{}> {
  render() {
    return (<div className={'page-container'}>
      <Topmenu>
        {
          routes.map(({path, title}, i) => (
            <TopmenuItem path={path} key={i} title={title}/>
          ))
        }
      </Topmenu>
      {
        routes.map(({path, exact, Component, props}, i) => (
          <Route
            path={path}
            exact={exact}
            key={i}
            render={(routeProps) => {
              // console.log(routeProps);
              return <Component {...props} {...routeProps} />
            }}
          />
        ))
      }
    </div>);
  }
}

export default App;
