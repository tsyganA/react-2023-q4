import styles from './SearchBlock.module.css';
import magnifierGlassImage from '/magnifier-glass.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchParams } from '../../store/reducers/queryParams';
import { setPage } from '../../store/reducers/queryParams';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
// import { SearchWordsContext } from '../search-page/Contexts';
// import { Fragment } from 'react';

const SearchBlock = () => {
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem('inputValue') || ''
  );
  const dispatch = useDispatch();
  const limit = useAppSelector((store) => store.queryParamsReducer.limit);
  const [, setSearch] = useSearchParams();
  return (
    // <SearchWordsContext.Consumer>
    //   {({ searchWord, setSearchWord, setRequest }) => (
    //     <Fragment>
          <div className={styles.searchBlock}>
            <input
              placeholder="Search..."
              type="text"
              className={styles.searchInput}
              value={searchWord}
              onChange={(event) => setSearchWord(event.target.value)}
              data-testid="searchInput"
            />
            <div
              className={styles.searchButton}
              onClick={() => {
                localStorage.setItem('inputValue', searchWord);
                dispatch(setSearchParams(searchWord));
                dispatch(setPage('1'));
                setSearch({ limit, page: `1` });
              }}
              data-testid="searchBtn"
            >
              <img src={magnifierGlassImage} alt="magnifier-glass" />
            </div>
          </div>
    //     </Fragment>
    //   )}
    // </SearchWordsContext.Consumer>
  );
};
export default SearchBlock;

// import styles from './SearchBlock.module.css';
// import magnifierGlassImage from '/magnifier-glass.png';

// const SearchBlock = (props: {
//   searchWord: string;
//   setSearchWord: React.Dispatch<React.SetStateAction<string>>;
//   onClickSearch: () => void;
// }) => {
//   const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target instanceof HTMLInputElement) {
//       props.setSearchWord(event.target.value);
//     }
//   };
//   return (
//     <>
//       <div className={styles.searchBlock}>
//         <input
//           placeholder="Search..."
//           type="text"
//           className={styles.searchInput}
//           value={props.searchWord}
//           onChange={onChangeInput}
//         />
//         <div className={styles.searchButton} onClick={props.onClickSearch}>
//           <img src={magnifierGlassImage} alt="magnifier-glass" />
//         </div>
//       </div>
//     </>
//   );
// };
// export default SearchBlock;
