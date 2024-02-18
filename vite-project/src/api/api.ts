import { ShortPersonRequest } from './requests-types';

const ROOT: string = 'https://swapi.dev/api';
const PEOPLE: string = '/people';
const SEARCH: string = '/?search=';

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

// export default class Swapi {
//   private baseImageUrl: string =
//     'https://starwars-visualguide.com/assets/img/characters/3.jpg';
// }    