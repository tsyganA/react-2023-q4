// export interface PersonRequest extends ShortPersonRequest {
//   mass: string;
//   skin_color: string;
//   homeworld: string;
//   films: string[];
//   species: string[];
//   vehicles: string[];
//   starships: string[];
//   created: string;
//   edited: string;
// }

// import { Dispatch } from "react";

// export interface ShortPersonRequest {
//   name: string;
//   birth_year: string;
//   gender: string;
//   height: string;
//   eye_color: string;
//   hair_color: string;
//   url: string;
// }

// export interface PersonRequest extends ShortPersonRequest {
//   status: 'Dead' | 'Alive' | 'unknown';
//   species: string;
//   type: string;
//   gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
//   image: string;
//   episode: string[];
// }

// export interface ShortPersonRequest {
//   id: number;
//   name: string;
//   // url: string;
//   // created: string;
//   // id: 1;
//   // name: string;
//   status: string;
//   species: string;
//   // type: string;
//   gender: string;
//   // origin: {
//   //   name: string;
//   //   url: string;
//   // };
//   // location: {
//   //   name: string;
//   //   url: string;
//   // };
//   image: string;
//   // episode: string[];
//   // url: string;
//   // created: string;
// }

// export interface iRenderRequest {
//   renderRequest: AttributesSpells[];
// }

import React, { Dispatch, SetStateAction } from 'react';
import {
  reduxApi,
  useGetOneSpellQuery,
  useGetSpellsQuery,
} from '../api/reduxApi';

export interface SpellsRequest {
  data: SpellsRequestData[];
  links: SpellsRequestLinks;
  meta: SpellsRequestMeta;
}

export interface OneSpellRequest {
  data: SpellsRequestData;
  links: { self: string };
  meta: SpellsRequestMeta;
}

export interface SpellsRequestData {
  attributes: AttributesSpells;
  id: string;
  links: { self: string };
  type: string;
}

export interface SpellsRequestLinks {
  current: string;
  last: string;
  next: string;
  self: string;
  records?: string;
}

export interface SpellsRequestMeta {
  copyright: string;
  generated_at: string;
  pagination?: SpellsRequestLinks;
}

export interface AttributesSpells {
  category: string;
  creator: string;
  effect: string;
  hand: string;
  image: string;
  incantation: string;
  light: string;
  name: string;
  slug: string;
  wiki: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// export interface SearchWordsContextType {
//   searchWord: string;
//   setSearchWord: Dispatch<SetStateAction<string>>;
//   request: string;
//   setRequest: Dispatch<SetStateAction<string>>;
// }

export interface SpellsRequestType {
  spellsRequest: SpellsRequestData[];
  setSpellsRequest: Dispatch<SetStateAction<SpellsRequestData[]>>;
}

export interface TransformedSpellsRequest {
  spells: SpellsRequestData[];
  isNextPage: boolean;
}

export interface TransformedOneSpellRequest {
  response: AttributesSpells;
}

export type ReduxApiMockType = {
  useGetSpellsQuery: typeof useGetSpellsQuery;
  useGetOneSpellQuery: typeof useGetOneSpellQuery;
  reducer: ReturnType<typeof reduxApi.reducer>;
  reducerPath: string;
};