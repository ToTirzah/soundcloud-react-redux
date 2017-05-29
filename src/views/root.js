import React from 'react';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';
import { routes } from './routes';
import PropTypes from 'prop-types';


function Root({history, store}) {
  return (
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        render={applyRouterMiddleware(useScroll())}
      />
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
