import styles from './App.module.css';
// import { useState } from 'react';
import SearchPage from '../search-page/SearchPage';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
// import { SpellsRequestContext } from '../search-page/Contexts';
// import { SpellsRequestData } from '../../api/requests-types';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // const spellsArr: SpellsRequestData[] = [];
  // const [spellsRequest, setSpellsRequest] = useState(spellsArr);

  return (
    <ErrorBoundary>
      {/* <SpellsRequestContext.Provider
        value={{ spellsRequest, setSpellsRequest }}
      > */}
        <div className={styles.container}>
          <div
            className={styles.content}
            onClick={() => {
              {
                location.pathname !== '/' && navigate('/');
              }
            }}
          >
            <SearchPage />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      {/* </SpellsRequestContext.Provider> */}
    </ErrorBoundary>
  );
}


export default App;

// class App extends Component {
//   render() {
//     return (
//       <ErrorBoundary>
//         <div className={styles.content}>
//           <SearchPage />
//         </div>
//       </ErrorBoundary>
//     );
//   }
// }

// import styles from './App.module.css';
// import SearchPage from '../search-page/SearchPage';
// import ErrorBoundary from '../error-boundary/ErrorBoundary';
// // import { Component } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';

// function App() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <ErrorBoundary>
//       <div className={styles.container}>
//         <div
//           className={styles.content}
//           onClick={() => {
//             if (location.pathname !== '/') {
//               navigate('/');
//             }
//           }}
//         >
//           <SearchPage />
//         </div>
//         <div>
//           <Outlet />
//         </div>
//       </div>
//     </ErrorBoundary>
//   );
// }

// // class App extends Component {
// //   render() {
// //     return (
// //       <ErrorBoundary>
// //         <div className={styles.content}>
// //           <SearchPage />
// //         </div>
// //       </ErrorBoundary>
// //     );
// //   }
// // }

// export default App;
