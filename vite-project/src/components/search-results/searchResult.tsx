import React, { Component } from 'react';
import styles from './searchResult.module.css';
import { iRenderRequest } from '../../api/requests-types';

export default class SearchResult extends Component<iRenderRequest> {
  private baseImageUrl: string =
    'https://starwars-visualguide.com/assets/img/characters/';

  private getId(url: string): string {
    const idRegExp: RegExp = /\/([0-9]*)\/$/;
    const matches: RegExpMatchArray | null = url.match(idRegExp);
    const id: string = matches ? matches[1] : '';
    // console.log(idRegExp)
    return id;
  }

  render(): React.ReactNode {
    const results = this.props.renderRequest.map((el, i) => {
      const id: string = this.getId(el.url);

      return (
        <div key={i} className={styles.person__info}>
          <img src={`${this.baseImageUrl}${id}.jpg`} alt="magnifier-glass" />
          <h2 className={styles.glow}>{el.name}</h2>
          <p>Year of birth: {el.birth_year}</p>
          <p>Gender: {el.gender}</p>
          <p>Height: {el.height}</p>
          <p>Eye color: {el.eye_color}</p>
          <p>Hair color: {el.hair_color}</p>
        </div>
      );
    });
    return <div className={styles.people__container}>{results}</div>;
  }
}
