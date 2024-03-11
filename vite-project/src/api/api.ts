import { ShortPersonRequest } from './requests-types';

const ROOT: string = 'https://api.potterdb.com/v1';
const PEOPLE: string = '/spells';
const SEARCH: string = '/?filter[name_cont]=';

export const findPeople: (
  searchWord: string
) => Promise<void | ShortPersonRequest> = (searchWord) =>
  request(ROOT + PEOPLE + SEARCH + searchWord);

const request = async (link: string): Promise<void | ShortPersonRequest> => {
  try {
    console.log(link)
    const result = await fetch(link);
    // console.log(result)
    const resultJSON = await result.json();
    // console.log(resultJSON)
    // console.log(resultJSON.data)
    return resultJSON.data;
  } catch (error) {
    console.error('The fetch was unsuccessful: ' + error);
  }
};
