import React from 'react';
import {
  SearchWordsContextType,
  SpellsRequestType,
} from '../../api/requests-types';

export const SearchWordsContext = React.createContext<SearchWordsContextType>({
  searchWord: '',
  setSearchWord: () => {},
  request: '',
  setRequest: () => {},
});

export const SpellsRequestContext = React.createContext<SpellsRequestType>({
  spellsRequest: [],
  setSpellsRequest: () => {},
});
