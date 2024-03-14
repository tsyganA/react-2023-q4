import { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';
import { iErrorBoundaryProps } from '../../api/requests-types';

class ErrorBoundary extends Component<iErrorBoundaryProps> {
  state = { ...defaultState };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true, error, errorInfo });
  }

  onResetButtonClick = () => {
    this.setState({ ...defaultState });
  };

  handleImageLoad = () => {
    this.setState({ imageAppeared: true });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h2>Do you have a problem? I&apos;ll help you!</h2>
          <button className={styles.resetBtn} onClick={this.onResetButtonClick}>
            Just click here
          </button>
          <img
            // src="http://127.0.0.1:5175/RSSchool-react-course/harry-potter.png"
            src="./RSSchool-react-course/src/master-yoda.png"
            alt="harry-potter"
            className={`${styles.error__img} ${
              this.state.imageAppeared && styles.appear
            }`}
            onLoad={this.handleImageLoad}
          />
        </div>
      );
    }
    return this.props.children;
  }
}

const defaultState = {
  hasError: false,
  error: null,
  errorInfo: null,
  imageAppeared: false,
};

export default ErrorBoundary;

// import { Component, ErrorInfo, ReactNode } from 'react';
// import styles from './ErrorBoundary.module.css';
// import { iErrorBoundaryProps } from '../../api/requests-types';

// class ErrorBoundary extends Component<iErrorBoundaryProps> {
//   state = {...defaultState};

//   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
//     this.setState({ hasError: true, error, errorInfo });
//   }

//   onResetButtonClick = () => {
//     this.setState({...defaultState});
//   };

//   handleImageLoad = () => {
//     this.setState({ imageAppeared: true });
//   };

//   render(): ReactNode {
//     if (this.state.hasError) {
//       return (
//         <div className={styles.errorContainer}>
//           <img
//             src="./master-yoda.png"
//             alt="master Yoda"
//             className={`${styles.error__img} ${
//               this.state.imageAppeared && styles.appear
//             }`}
//             onLoad={this.handleImageLoad}
//           />
//           <h2>Do you have a problem? I&apos;ll help you!</h2>
//           <button className={styles.resetBtn} onClick={this.onResetButtonClick}>
//             Just click here
//           </button>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const defaultState = {
//   hasError: false,
//   error: null,
//   errorInfo: null,
//   imageAppeared: false,
// };

// export default ErrorBoundary;
