import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getSearch, searchActions } from 'src/core/search';
import PropTypes from 'prop-types';

import AppHeader from '../components/app-header';
import Player from '../components/player';


export function App({children, handleSearch, search, toggleSearch}) {
  return (
    <div>
      <AppHeader
        handleSearch={handleSearch}
        search={search}
        toggleSearch={toggleSearch}
      />

      <main className="main">
        {children}
      </main>

      <Player />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  toggleSearch: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getSearch,
  search => ({
    search: search.toJS()
  })
);

const mapDispatchToProps = {
  handleSearch: searchActions.navigateToSearch,
  toggleSearch: searchActions.toggleSearchField
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
