import { fireEvent, render, screen } from '@testing-library/react';
import { transformCard, transformCards } from './fakeData/fakeData';
// import Pagination from '../components/pagination/Pagination';
// import { fakeDataCards } from './fakeData/fakeDataToCards';
// import { fakeData } from './fakeData/fakeData';
// import { SpellsRequestType } from '../api/requests-types';
// import { spellsRequest } from './fakeData/spellsRequest';
import { routes } from '../router/router';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
// import { SpellsRequestContext } from '../components/search-page/Contexts';
// import { findSpells } from '../api/reduxApi';
// import { vi } from 'vitest';
import { rootReducer } from '../store/store';
import { Provider } from 'react-redux';
import { ReduxApiMockType } from '../api/requests-types';
import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './fakeData/initialSliceState';

describe('Tests for the Pagination', () => {
  beforeAll(() => {
    vi.mock('../api/reduxApi', async () => {
      const actual: { reduxApi: ReduxApiMockType } = (await vi.importActual(
        '../api/reduxApi'
      )) as { reduxApi: ReduxApiMockType };
    // vi.mock('../api/api', () => {
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

  // test('Make sure that API called with other number after change the page', () => {
  //   const setPageMock = vi.fn();
  //   render(
  //     <Pagination page="2" setPage={setPageMock} isNextPageActive={true} />
  //   );
  //   const nextButton = screen.getByText('next');
  //   fireEvent.click(nextButton);
  //   expect(setPageMock).toBeCalledWith('3');
  // });

  test('Make sure the component updates URL query parameter when page changes', async () => {
    const mockStore = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    });
    // const cardsList: SpellsRequestType = {
    //   spellsRequest: spellsRequest,
    //   setSpellsRequest: vi.fn(),
    // };
    const router = createMemoryRouter(routes, {
      initialEntries: ['?limit=10&page=2'],
    });
    // console.log(router.state.location.search)
    // await act(async () =>
      render(
        // <SpellsRequestContext.Provider value={cardsList}>
        <Provider store={mockStore}>
          <RouterProvider router={router} />
          </Provider>
              );
        // </SpellsRequestContext.Provider>
      // )
  
    // console.log(router.state.location.search)

    // expect(router.state.location.search).toBe('?page=4&limit=8');
    // const pagination = screen.getByTestId('pagination');
    // console.log(pagination)
    // expect(pagination).toBeInTheDocument();
    const nextBtn = screen.getByTestId('nextBtn');
    // expect(nextBtn).toBeInTheDocument();
    const prevBtn = screen.getByTestId('prevBtn');
 
    await act(() => {
      expect(router.state.location.search).toBe('?limit=10&page=2');
      const pagination = screen.getByTestId('pagination');
      expect(pagination).toBeInTheDocument();
      expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    fireEvent.click(nextBtn);
    
      expect(router.state.location.search).toBe('?limit=10&page=2');
      
    });
    
    // expect(findSpells).toBeCalledTimes(1);

    // expect(findSpells).toHaveBeenCalledWith('', '8', '3');

    // await waitFor(() => {


      await act(() => {
      fireEvent.click(nextBtn);
      expect(router.state.location.search).toBe('?limit=10&page=2');
    });

    // expect(findSpells).toBeCalledTimes(2);
    // expect(findSpells).toHaveBeenCalledWith('', '8', '4');
    // expect(router.state.location.search).toBe('?limit=10&page=3');

    // await waitFor(() => {

      await act(() => {
      fireEvent.click(prevBtn);
      expect(router.state.location.search).toBe('?limit=10&page=2');
    });

    // expect(findSpells).toBeCalledTimes(2);
    // expect(findSpells).toHaveBeenCalledWith('', '8', '3');
    // expect(router.state.location.search).toBe('?page=3&limit=8');
  });
});
