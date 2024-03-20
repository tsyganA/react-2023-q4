import styles from './Pagination.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPage } from '../../store/reducers/queryParams';
import { useSearchParams } from 'react-router-dom';

// const NotFound = () => {
//   const [image, setImage] = useState(false);

//   const handleImageLoad = () => {
//     setImage(true);
//   };

//   return (
//     <div className={styles.errorContainer}>
//       <h2>Evanesco!</h2>
//       <img
//         src="./hermione-granger.png"
//         alt="hermione-granger"
//         className={`${styles.error__img} ${image && styles.appear}`}
//         onLoad={handleImageLoad}
//       />
//       <h3>Sorry, this page has disappeared...</h3>
//       <Link to="/">
//         <button className={styles.resetBtn}>Go to main page</button>
//       </Link>
//     </div>
//   );
// };
// export default NotFound;

const Pagination = () => {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((store) => store.queryParamsReducer.limit);
  const page = useAppSelector((state) => state.queryParamsReducer.page);
  const isNextPageActive = useAppSelector(
    (state) => state.queryParamsReducer.isNextPage
  );
  const [, setSearchParams] = useSearchParams();
//   props: {
//   page: string;
//   setPage: React.Dispatch<React.SetStateAction<string>>;
//   isNextPageActive: boolean;
// }) => {
  const onPrevBtnClick = () => {
    dispatch(setPage(`${+page - 1}`));
    setSearchParams({ limit, page: `${+page - 1}` });
  };
  //   if (+props.page > 1) {
  //     const newPage = `${+props.page - 1}`;
  //     props.setPage(newPage);
  //     localStorage.setItem('page', newPage);
  //   }
  // };
  const onNextBtnClick = () => {
    dispatch(setPage(`${+page + 1}`));
    setSearchParams({ limit, page: `${+page + 1}` });
  };
  //   const newPage = `${+props.page + 1}`;
  //   props.setPage(newPage);
  //   localStorage.setItem('page', newPage);
  // };
  const classNames = (...args: string[]) => {
    return args.filter(Boolean).join(' ');
  };
  const disabledPrev = +page === 1;
  const classNamePrevPage = classNames(disabledPrev ? styles.disabled : '');
  // const disabledNext = !props.isNextPageActive;

  const classNamePrevPage = classNames(
    !isNextPageActive ? styles.disabled : ''
  );
  const classNameNextPage = classNames(
    !isNextPageActive ? styles.disabled : ''
  );

  return (
    <div className={styles.paginationBlock} data-testid="pagination">
      <button
        className={classNamePrevPage}
        onClick={onPrevBtnClick}
        disabled={disabledPrev}
        data-testid={'prevBtn'}
      >
        prev
      </button>
      <p>{page}</p>
      <button
        className={classNameNextPage}
        onClick={onNextBtnClick}
        disabled={!isNextPageActive}
        data-testid={'nextBtn'}
      >
        next
      </button>
    </div>
  );
};
export default Pagination;
