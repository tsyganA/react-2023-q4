import React, { Component } from 'react';
import styles from './searchResult.module.css';
import { iRenderRequest } from '../../api/requests-types';

export default class SearchResult extends Component<iRenderRequest> {
  // private baseImageUrl: string =
  //   'https://rickandmortyapi.com/api/character/avatar/';

  // private getId(url: string): string {
  //   const idRegExp: RegExp = /\/([0-9]*)\/$/;
  //   const matches: RegExpMatchArray | null = url.match(idRegExp);
  //   const id: string = matches ? matches[1] : '';
  //   // console.log(idRegExp)
  //   return id;
  // }

  render(): React.ReactNode {
    const results = this.props.renderRequest.map((el, i) => {
      // const id: string = this.getId(el.url);

      return (
         <div key={i} className={styles.person__info}>
          {/* <img src={`${this.baseImageUrl}${id}.jpg`} alt="magnifier-glass" /> */}
          <h2 className={styles.glow}>{el.name}</h2>
          {/* <img
            src={el.image}
            alt="magnifier-glass"
          /> */}
            
          {/* {el.image ? (
            <img
              // className={styles.cardImg}
              src={el.image}
              alt="spells-image"
            />
          ) : (
            <img
              // className={styles.cardImg}
              src="https://static.wikia.nocookie.net/harrypotter/images/4/48/Flipendo_Maxima_HM_Spell_Icon.png"
              alt="spells-image"
            />
          )} */}
          <p>Effect: {el.effect}</p>
          {/* <p>image: {el.image}</p> */}
          <p>Category: {el.category}</p>
          <p>Light: {el.light}</p>
        </div>



        // <div key={i} className={styles.person__info}>
        //   {/* <img
        //     src={`${this.baseImageUrl}${el.id}.jpeg`}
        //     alt="magnifier-glass"
        //   /> */}
        //   <img
        //     src={el.image}
        //     alt="magnifier-glass"
        //   />
        //   <h2 className={styles.glow}>{el.name}</h2>
        //   <p>Status: {el.status}</p>
        //   <p>Species: {el.species}</p>
        //   {/* <p>origin: {el.origin.name}</p> */}
        //   <p>Gender: {el.gender}</p>
        // </div>

        //   <div key={i} className={styles.person__info}>
        //   <img src={`${this.baseImageUrl}${id}.jpg`} alt="magnifier-glass" />
        //   <h2 className={styles.glow}>{el.name}</h2>
        //   <p>Year of birth: {el.birth_year}</p>
        //   <p>Gender: {el.gender}</p>
        //   <p>Height: {el.height}</p>
        //   <p>Eye color: {el.eye_color}</p>
        //   <p>Hair color: {el.hair_color}</p>
        // </div>
      );
    });
    return <div className={styles.people__container}>{results}</div>;
  }
}
