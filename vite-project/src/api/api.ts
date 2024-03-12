import { OneSpellRequest, SpellsRequest } from './requests-types';

const ROOT: string = 'https://api.potterdb.com/v1/';
const SPELLS: string = '/spells';
const LIMIT: string = '?page[size]=';
const PAGE: string = '&page[number]=';
const SEARCH: string = '&filter[name_cont]=';
export const findSpells: (
  searchWord: string,
  limit?: string,
  page?: string
) => Promise<void | SpellsRequest> = (
  searchWord: string,
  limit: string = '8',
  page: string = '1'
) => request(ROOT + SPELLS + LIMIT + limit + PAGE + page + SEARCH + searchWord);

const request = async (link: string) => {
  try {
    const result = await fetch(link);
    const resultJSON = await result.json();
    return resultJSON;
  } catch (error) {
    console.error('The fetch was unsuccessful: ' + error);
  }
};

export const getSpell: (id: string) => Promise<undefined | OneSpellRequest> = (
  id: string
) => request(ROOT + SPELLS + '/' + id);

// import { OneSpellRequest, SpellsRequest } from './requests-types';

// const ROOT: string = 'https://api.potterdb.com/v1';
// const SPELLS: string = '/spells';
// const SEARCH: string = '/?filter[name_cont]=';

// export const findSpells: (
//   searchWord: string
// ) => Promise<void | SpellsRequest> = (searchWord) =>
//   request(ROOT + SPELLS + SEARCH + searchWord);

// const request = async (link: string): Promise<void | SpellsRequest> => {
//   try {
//     // console.log(link)
//     const result = await fetch(link);
//     // console.log(result)
//     const resultJSON = await result.json();
//     // console.log(resultJSON)
//     // console.log(resultJSON.data)
//     return resultJSON.data;
//   } catch (error) {
//     console.error('The fetch was unsuccessful: ' + error);
//   }
// };

// export const getSpell: (id: string) => Promise<undefined | OneSpellRequest> = (
//   id: string
// ) => request(ROOT + SPELLS + '/' + id);
