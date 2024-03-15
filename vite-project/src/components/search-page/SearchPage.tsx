import { useEffect, useState, useContext } from 'react';
import styles from './SearchPage.module.css';
import { findSpells } from '../../api/api';
import SearchResult from '../search-results/searchResult';
import {
  OneSpellRequest,
  SpellsRequest,
  SpellsRequestData,
} from '../../api/requests-types';
import ErrorButton from '../error-button/ErrorButton';
import SearchBlock from '../search-block/SearchBlock';
import {
  chooseLimit,
  choosePage,
  chooseSearchWord,
} from '../../utils/chooseSearchWord';
import LimitInput from '../limitPerPageInput/LimitInput';
import Pagination from '../pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { SearchWordsContext, SpellsRequestContext } from './Contexts';

function SearchPage() {
  const { spellsRequest, setSpellsRequest } = useContext(SpellsRequestContext);
  // console.log(spellsRequest)
  const [searchWord, setSearchWord] = useState(chooseSearchWord());
  // console.log(searchWord)
  const [isLoading, setIsLoading] = useState(false);
  // console.log(isLoading)
  const [, setIsErrorRequest] = useState(false);
  // console.log(isErrorRequest)
  const [request, setRequest] = useState(chooseSearchWord());
  // console.log(request)
  const [limitPerPage, setLimitPerPage] = useState(chooseLimit());
  // console.log(limitPerPage)
  const [page, setPage] = useState(choosePage());
  // console.log(page)
  const [isNextPageActive, setIsNextPageActive] = useState(false);
  // console.log(isNextPageActive)
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: page, limit: limitPerPage });
    // console.log(setSearchParams)
    const onClickSearch = async (): Promise<
      SpellsRequestData[] | undefined
    > => {
      setIsNextPageActive(false);
      setIsLoading(true);
      setIsErrorRequest(false);
      setSpellsRequest([]);
      const requestObj: SpellsRequest | OneSpellRequest | void =
        await findSpells(request, limitPerPage, page);
      // console.log(requestObj)
      if (
        requestObj &&
        requestObj.data instanceof Array &&
        requestObj.data.length !== 0
      ) {
        const isNextPage = !!requestObj.meta.pagination.next;
        setIsNextPageActive(isNextPage);
        const requestArr = requestObj.data;
        setSpellsRequest(requestArr);
        setIsLoading(false);
        localStorage.setItem('inputValue', request);
        // console.log(requestArr);
        return requestArr;
      } else {
        localStorage.setItem('inputValue', request);
        setIsLoading(false);
        setIsErrorRequest(true);
      }
    };
    onClickSearch();
    console.log(onClickSearch());
  }, [request, limitPerPage, page, setSpellsRequest, setSearchParams]);

  return (
    <SearchWordsContext.Provider
      value={{ searchWord, setSearchWord, setRequest, request }}
    >
      <div className={styles.searchPage}>
        <SearchBlock />
        <div className={styles.searchDetails}>
          <ErrorButton />
          <LimitInput
            limit={limitPerPage}
            setLimit={setLimitPerPage}
            setPage={setPage}
          />
        </div>
        {isLoading && <div className={styles.spinner}></div>}
        {!isLoading && <SearchResult />}
        {spellsRequest.length !== 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            isNextPageActive={isNextPageActive}
          />
        )}
      </div>
    </SearchWordsContext.Provider>
  );
}

export default SearchPage;

// import { useEffect, useState } from 'react';
// import styles from './SearchPage.module.css';
// import { findSpells } from '../../api/api';
// import SearchResult from '../search-results/searchResult';
// import {
//   OneSpellRequest,
//   SpellsRequest,
//   SpellsRequestData,
// } from '../../api/requests-types';
// import ErrorButton from '../error-button/ErrorButton';
// import SearchBlock from '../search-block/SearchBlock';
// import {
//   chooseLimit,
//   choosePage,
//   chooseSearchWord,
// } from '../../utils/chooseSearchWord';
// import LimitInput from '../limitPerPageInput/LimitInput';
// import Pagination from '../pagination/Pagination';
// import { useSearchParams } from 'react-router-dom';

// function SearchPage() {
//   const peopleArr: SpellsRequestData[] = [];
//   // console.log(peopleArr)
//   const [searchWord, setSearchWord] = useState(chooseSearchWord());
//   // console.log(searchWord)
//   const [peopleRequest, setPeopleRequest] = useState(peopleArr);
//   // console.log(peopleRequest)
//   const [isLoading, setIsLoading] = useState(false);
//   // console.log(isLoading)
//   const [isErrorRequest, setIsErrorRequest] = useState(false);
//   // console.log(isErrorRequest)
//   const [request, setRequest] = useState(chooseSearchWord());
//   // console.log(request)
//   const [limitPerPage, setLimitPerPage] = useState(chooseLimit());
//   // console.log(limitPerPage)
//   const [page, setPage] = useState(choosePage());
//   // console.log(page)
//   const [isNextPageActive, setIsNextPageActive] = useState(false);
//   // console.log(isNextPageActive)
//   const [, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     setSearchParams({ page: page, limit: limitPerPage });
//     // console.log(setSearchParams)
//     const onClickSearch = async (): Promise<
//       SpellsRequestData[] | undefined
//     > => {
//       setIsNextPageActive(false);
//       setIsLoading(true);
//       setIsErrorRequest(false);
//       setPeopleRequest([]);
//       const requestObj: SpellsRequest | OneSpellRequest | void =
//         await findSpells(request, limitPerPage, page);
//       // console.log(requestObj)
//       if (
//         requestObj &&
//         requestObj.data instanceof Array &&
//         requestObj.data.length !== 0
//       ) {
//         const isNextPage = !!requestObj.meta.pagination.next;
//         setIsNextPageActive(isNextPage);
//         const requestArr = requestObj.data;
//         setPeopleRequest(requestArr);
//         setIsLoading(false);
//         localStorage.setItem('inputValue', request);
//         // console.log(requestArr);
//         return requestArr;
//       } else {
//         localStorage.setItem('inputValue', request);
//         setIsLoading(false);
//         setIsErrorRequest(true);
//       }
//     };
//     onClickSearch();
//     // console.log(onClickSearch())
//   }, [request, limitPerPage, page, setSearchParams]);

//   const onSetRequest = () => {
//     setRequest(searchWord);
//   };

//   return (
//     <div className={styles.searchPage}>
//       <SearchBlock
//         searchWord={searchWord}
//         setSearchWord={setSearchWord}
//         onClickSearch={onSetRequest}
//       />
//       <div className={styles.searchDetails}>
//         <ErrorButton />
//         <LimitInput
//           limit={limitPerPage}
//           setLimit={setLimitPerPage}
//           setPage={setPage}
//         />
//       </div>
//       {isLoading && <div className={styles.spinner}></div>}
//       {!isLoading && !isErrorRequest && peopleRequest.length !== 0 && (
//         <SearchResult peopleRequest={peopleRequest} />
//       )}
//       {isErrorRequest && (
//         <h2>We couldn&apos;t find anything matching your request.</h2>
//       )}
//       {peopleRequest.length !== 0 && (
//         <Pagination
//           page={page}
//           setPage={setPage}
//           isNextPageActive={isNextPageActive}
//         />
//       )}
//     </div>
//   );
// }

// export default SearchPage;

// import React from 'react';
// import styles from './SearchPage.module.css';
// import { findPeople } from '../../api/api';
// import SearchResult from '../search-results/searchResult';
// import { SpellsRequestData, AttributesSpells } from '../../api/requests-types';
// import ErrorButton from '../error-button/ErrorButton';
// import LimitInput from '../limitPerPageInput/LimitInput';
// import { useState } from 'react';
// import {
//   chooseLimit,
//   choosePage,
//   // chooseSearchWord,
// } from '../../utils/chooseSearchWord';

// const [limitPerPage, setLimitPerPage] = useState(chooseLimit());
// // console.log(limitPerPage)
// const [page, setPage] = useState(choosePage());
// // const [searchWord, setSearchWord] = useState(chooseSearchWord());

// class SearchPage extends React.Component {

//   componentDidMount(): void {
//     this.onClickSearch();
//   }

//   chooseSearchWord(): string {
//     const value: string | null = localStorage.getItem('inputValue');
//     if (value) {
//       return value;
//     }
//     return '';
//   }

//   state = {
//     searchWord: this.chooseSearchWord(),
//     peopleRequest: [],
//     isLoading: false,
//     isErrorRequest: false,
//   };

//   onClickSearch = async (): Promise<AttributesSpells[] | undefined> => {
//     const searchWord = this.state.searchWord.trim();
//     // console.log(searchWord)
//     this.setState({ isLoading: true, isErrorRequest: false });
//     const requestArr = await findPeople(searchWord);
//     // console.log(requestArr)
//     if (requestArr instanceof Array && requestArr.length !== 0) {
//       const shortRequestArr = requestArr.map((ele: SpellsRequestData) => {

//         return {
//           name: ele.attributes.name,
//           effect: ele.attributes.effect,
//           image: ele.attributes.image,
//           category: ele.attributes.category,
//           light: ele.attributes.light,
//         };
//         // return {
//         //   id: ele.id,
//         //   name: ele.name,
//         //   status: ele.status,
//         //   species: ele.species,
//         //   // type: ele.type,
//         //   gender: ele.gender,
//         //   // origin: ele.origin,
//         //   image: ele.image,
//         // };
//         // return {
//         //   name: ele.name,
//         //   birth_year: ele.birth_year,
//         //   gender: ele.gender,
//         //   height: ele.height,
//         //   eye_color: ele.eye_color,
//         //   hair_color: ele.hair_color,
//         //   url: ele.url,
//         // };
//       });
//       this.setState({ peopleRequest: shortRequestArr, isLoading: false });
//       localStorage.setItem('inputValue', this.state.searchWord);
//       // console.log(shortRequestArr)
//       return shortRequestArr;
//     } else {
//       localStorage.setItem('inputValue', this.state.searchWord);
//       this.setState({ isLoading: false, isErrorRequest: true });
//     }
//   };

//   onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target instanceof HTMLInputElement) {
//       this.setState({ searchWord: event.target.value });
//     }
//   };

//   render() {
//     return (
//       <>
//         <form className={styles.searchBlock}>
//           <input
//             placeholder="Search..."
//             type="text"
//             className={styles.searchInput}
//             value={this.state.searchWord}
//             onChange={this.onChangeInput}
//           />
//         <LimitInput
//           limit={limitPerPage}
//           setLimit={setLimitPerPage}
//           setPage={setPage}
//         />
//           <button className={styles.searchButton} onClick={this.onClickSearch}>
//             <img src="./magnifier-glass.png" alt="magnifier-glass" />
//           </button>
//         </form>
//         <ErrorButton />
//         {this.state.isLoading && <div className={styles.spinner}></div>}
//         {!this.state.isLoading && !this.state.isErrorRequest && (
//           <SearchResult renderRequest={this.state.peopleRequest} />
//         )}
//         {this.state.isErrorRequest && (
//           <h2>We couldn&apos;t find anything matching your request.</h2>
//         )}
//       </>
//     );
//   }
// }

// export default SearchPage;
