import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../root/common/NotFound';

const MainPageRoute = React.lazy(() => import('./components/MainPageRoute'));

const CreateRoute: FC = (): ReactElement<void> => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<p>Loading....</p>}>
            <MainPageRoute />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CreateRoute;
