import { useState } from 'react';
import styles from './ErrorButton.module.css';

function ErrorButton() {
  const [hasError, setHasError] = useState(false);

  const resetError = () => {
    setHasError(true);
    throw new Error('This is example Error');
  };

  if (hasError) {
    throw new Error('This is example Error');
  }
  return (
    <>
      {!hasError && (
        <button
          onClick={resetError}
          className={styles.errorButton}
          data-testid="errorBtn"
        >
          Create Error
        </button>
      )}
    </>
  );
}

export default ErrorButton;

// import { Component, ReactNode } from 'react';
// import styles from './ErrorButton.module.css';

// const errorMessage = 'Oh no... You have a problem!';
// class ErrorButton extends Component {
//   state = {
//     hasError: false,
//   };

//   createError = () => {
//     this.setState({ hasError: false });
//   };

//   resetError = () => {
//     this.setState({ hasError: true });
//     throw new Error(errorMessage);
//   };

//   render(): ReactNode {
//     if (this.state.hasError) {
//       throw new Error(errorMessage);
//     }

//     return (
//       <>
//         {!this.state.hasError && (
//           <button onClick={this.resetError} className={styles.errorButton}>
//             Create Error
//           </button>
//         )}
//       </>
//     );
//   }
// }

// export default ErrorButton;
