import { ShortPersonRequest } from './requests-types';

// const ROOT: string = 'https://swapi.dev/api';
const ROOT: string = 'https://rickandmortyapi.com/api';
// const PEOPLE: string = '/people';
const PEOPLE: string = '/character';
// const SEARCH: string = '/?search=';
const SEARCH: string = '/?name=';

export const findPeople: (
  searchWord: string
) => Promise<void | ShortPersonRequest> = (searchWord) =>
  request(ROOT + PEOPLE + SEARCH + searchWord);

const request = async (link: string): Promise<void | ShortPersonRequest> => {
  try {
    const result = await fetch(link);
    const resultJSON = await result.json();
    return resultJSON.results;
  } catch (error) {
    console.error('The fetch was unsuccessful: ' + error);
  }
};
