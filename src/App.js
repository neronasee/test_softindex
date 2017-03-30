import React, {Component} from 'react';

import Header from './components/Header.js';
import Layout from './components/Layout.js';
import FormContainer from './containers/FormContainer.js';
import TableContainer from './containers/TableContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout
          leftSide={<FormContainer />}
          rightSide={<TableContainer />}
        />
      </div>
    );
  }
}

export default App;
