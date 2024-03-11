import React from 'react';
import styles from './SearchPage.module.css';
import { findPeople } from '../../api/api';
import SearchResult from '../search-results/searchResult';
import { AttributesSpells, SpellsRequestData } from '../../api/requests-types';
import ErrorButton from '../error-button/ErrorButton';

class SearchPage extends React.Component {
  componentDidMount(): void {
    this.onClickSearch();
  }

  chooseSearchWord(): string {
    const value: string | null = localStorage.getItem('inputValue');
    if (value) {
      return value;
    }
    return '';
  }

  state = {
    searchWord: this.chooseSearchWord(),
    peopleRequest: [],
    isLoading: false,
    isErrorRequest: false,
  };

  onClickSearch = async (): Promise<AttributesSpells[] | undefined> => {
    const searchWord = this.state.searchWord.trim();
    this.setState({ isLoading: true, isErrorRequest: false });
    const requestArr = await findPeople(searchWord);
    if (requestArr instanceof Array && requestArr.length !== 0) {
      const shortRequestArr = requestArr.map((ele: SpellsRequestData) => {
        return {
          // id: ele.id,
          name: ele.name,
          // status: ele.status,
          // species: ele.species,
          // type: ele.type,
          // gender: ele.gender,
          // origin: ele.origin,
          // image: ele.image,
        };
        // return {
        //   name: ele.name,
        //   birth_year: ele.birth_year,
        //   gender: ele.gender,
        //   height: ele.height,
        //   eye_color: ele.eye_color,
        //   hair_color: ele.hair_color,
        //   url: ele.url,
        // };
      });
      this.setState({ peopleRequest: shortRequestArr, isLoading: false });
      localStorage.setItem('inputValue', this.state.searchWord);
      console.log(shortRequestArr)
      return shortRequestArr;
    } else {
      localStorage.setItem('inputValue', this.state.searchWord);
      this.setState({ isLoading: false, isErrorRequest: true });
    }
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ searchWord: event.target.value });
    }
  };

  render() {
    return (
      <>
        <form className={styles.searchBlock}>
          <input
            placeholder="Search..."
            type="text"
            className={styles.searchInput}
            value={this.state.searchWord}
            onChange={this.onChangeInput}
          />
          <button className={styles.searchButton} onClick={this.onClickSearch}>
            <img src="./magnifier-glass.png" alt="magnifier-glass" />
          </button>
        </form>
        <ErrorButton />
        {this.state.isLoading && <div className={styles.spinner}></div>}
        {!this.state.isLoading && !this.state.isErrorRequest && (
          <SearchResult renderRequest={this.state.peopleRequest} />
        )}
        {this.state.isErrorRequest && (
          <h2>We couldn&apos;t find anything matching your request.</h2>
        )}
      </>
    );
  }
}

export default SearchPage;
