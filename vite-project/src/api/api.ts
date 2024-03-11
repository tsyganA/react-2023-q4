import { AttributesSpells } from './requests-types';

// const ROOT: string = 'https://rickandmortyapi.com/api';
const ROOT: string = 'https://api.potterdb.com/v1/';
const SPELLS: string = '/spells';
// const PEOPLE: string = '/character';
// const SEARCH: string = '/?name=';
const SEARCH: string = '/?filter[name_cont]=';


export const findPeople: (
  searchWord: string
) => Promise<void | AttributesSpells> = (searchWord) =>
  request(ROOT + SPELLS + SEARCH + searchWord);

const request = async (link: string): Promise<void | AttributesSpells> => {
  try {
    const result = await fetch(link);
    const resultJSON = await result.json();
    return resultJSON.results;
  } catch (error) {
    console.error('The fetch was unsuccessful: ' + error);
  }
};
