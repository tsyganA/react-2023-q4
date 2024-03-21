// import {
//   act,
//   fireEvent,
//   render,
//   screen,
//   waitFor,
// } from '@testing-library/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import SearchCard from '../components/search-card/SearchCard';
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { routes } from '../router/router';
// import { fakeDataCards } from './fakeData/fakeDataToCards';
// import { SpellsRequestType } from '../api/requests-types';
// import { spellsRequest } from './fakeData/spellsRequest';
// import { SpellsRequestContext } from '../components/search-page/Contexts';
import { propsToCard } from './fakeData/propsToCard';
// import { fakeData } from './fakeData/fakeData';
// import { getSpell } from '../api/reduxApi';
// import { vi } from 'vitest';
// import CardDetail from '../components/card-detail/CardDetail';
import { useGetOneSpellQuery } from '../api/reduxApi';
import { rootReducer } from '../store/store';
import { Provider } from 'react-redux';
import { ReduxApiMockType } from '../api/requests-types';
import { transformCard, transformCards } from './fakeData/fakeData';
import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './fakeData/initialSliceState';

describe('Tests for the SearchCard component', () => {
  beforeAll(() => {
    // vi.mock('../api/api', () => {
      vi.mock('../api/reduxApi', async () => {
        const actual: { reduxApi: ReduxApiMockType } = (await vi.importActual(
          '../api/reduxApi'
        )) as { reduxApi: ReduxApiMockType };
      return {
        ...actual,
        useGetOneSpellQuery: vi.fn(() => transformCard),
        useGetSpellsQuery: vi.fn(() => transformCards),
        // findSpells: vi.fn(async () => {
        //   return fakeDataCards;
        // }),
        // getSpell: vi.fn(() => {
        //   return fakeData;
        // }),
      };
    });
  });
  afterAll(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test('Ensure that the card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <SearchCard {...propsToCard} />
      </MemoryRouter>
    );

    const cardName = screen.getByText(propsToCard.name);
    // console.log(cardName)
    expect(cardName).toBeTruthy();

    const cardEffect = screen.getByText((content) => {
      return content.includes(propsToCard.effect);
    });
    // console.log(cardEffect)
    expect(cardEffect).toBeTruthy();

    // console.log(cardImage)
    const cardImage = screen.getByAltText('spells-image');
    // console.log(cardImage)
    expect(cardImage.getAttribute('src')).toBe(propsToCard.image);
  });
  test('Validate that clicking on a card opens a detailed card component && Check that clicking triggers an additional API call to fetch detailed information.', async () => {
    const mockStore = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    });

 
    // const cardsList: SpellsRequestType = {
    //   spellsRequest: spellsRequest,
    //   setSpellsRequest: vi.fn(),
    // };
    const router = createMemoryRouter(routes, {
      initialEntries: ['?page=1&limit=5'],
    });

    // await act(async () =>
      render(
        <Provider store={mockStore}>
        <RouterProvider router={router} />
      </Provider>
          );
      //   <SpellsRequestContext.Provider value={cardsList}>
      //     <RouterProvider router={router} />
      //     {/* <CardDetail /> */}
      //     <MemoryRouter>
      //       <CardDetail />
      //     </MemoryRouter>
      //   </SpellsRequestContext.Provider>
      // )

    const cards = await screen.findAllByTestId('card');
    expect(cards).toBeTruthy();

    // expect(getSpell).toBeCalledTimes(0);
    expect(useGetOneSpellQuery).toBeCalledTimes(0);

    await waitFor(() => {
      fireEvent.click(cards[1]);
    });

    const detailed = screen.getByTestId('detailsBlock');
    // console.log(detailed)
    expect(detailed).toBeInTheDocument();

    const detailedCardName = screen.getByText(/light: Ice-blue/i);
    expect(detailedCardName).toBeInTheDocument();

    // expect(getSpell).toBeCalledTimes(1);
    expect(useGetOneSpellQuery).toBeCalledTimes(1);
  });
});
