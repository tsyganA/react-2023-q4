import styles from './App.module.css';
import SearchPage from '../search-page/SearchPage';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { Component } from 'react';
// import Swapi from '../../api/api.ts';

// const swapi: Swapi = new Swapi();

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className={styles.content}>
          <SearchPage />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
