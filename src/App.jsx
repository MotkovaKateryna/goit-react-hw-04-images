// import ImagesSearch from 'modules/ImagesSearch/ImagesSearch';

// export const App = () => {
//   return (
//     <div>
//       <ImagesSearch />
//     </div>
//   );
// };
import ImagesSearch from 'modules/ImagesSearch/ImagesSearch';
import React from 'react';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <ImagesSearch />
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};
