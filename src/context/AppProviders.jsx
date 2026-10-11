

// import { ThemeProvider } from "./theme/ThemeProvider";

// export const AppProviders = ({ children }) => {
//   return (
//     <ThemeProvider>
//       {children}
//     </ThemeProvider>
//   );
// };


import { Provider } from 'react-redux';
import { store } from '../store'; // تأكد من صحة مسار الـ store
import { ThemeProvider } from './theme/ThemeProvider';

export const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
};