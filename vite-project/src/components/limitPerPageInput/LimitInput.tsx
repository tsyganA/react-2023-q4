import { useState } from 'react';

import styles from './LimitInput.module.css';
import { setLimit, setPage } from '../../store/reducers/queryParams';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useSearchParams } from 'react-router-dom';

const LimitInput = () => {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.queryParamsReducer.limit);
//   props: {
//   limit: string;
//   setLimit: React.Dispatch<React.SetStateAction<string>>;
//   setPage: React.Dispatch<React.SetStateAction<string>>;
// }) => {
  const [itemPerPage, setItemPerPage] = useState(limit);
  const [, setSearchParams] = useSearchParams();

  // const setItemCount = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target instanceof HTMLInputElement) {
  //     setItemPerPage(event.target.value);
  //   }
  // };

  const onAcceptClick = async () => {
    await dispatch(setLimit(itemPerPage));
    await dispatch(setPage('1'));
    setSearchParams({ limit: itemPerPage, page: '1' });
  };
  return (
    // <>
      <div className={styles.container}>
        <input
          type="number"
          value={itemPerPage}
          onChange={(event) => {
            setItemPerPage(event.target.value);
          }}
          className={styles.limitInput}
          min="1"
          data-testid="limitInput"
        />
        <button onClick={onAcceptClick}>Accept</button>
      </div>
    // </>
  );
};
export default LimitInput;
