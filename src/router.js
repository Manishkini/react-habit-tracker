import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Error404 from './pages/404';
import Header from './components/header';
import Footer from './components/footer';
import SignIn from './pages/auth/sign-in';

const routes = [
  {
    path: '/habits',
    Component: lazy(() => import('./pages/habits')),
    extact: true,
  },
  {
    path: '/habits/create',
    Component: lazy(() => import('./pages/habits/create-habit')),
    extact: true,
  },
  {
    path: '/habits/detail/:id',
    Component: lazy(() => import('./pages/habits/detail-habit')),
    extact: true,
  },
];

const PrivateRoute = ({ user }) => {
  return user && user.email ? <Outlet /> : <Navigate to={'/auth/sign-in'} />;
};

function router({ user }) {
  return (
    <div className="font-mono bg-slate-800 text-green-100">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/auth/sign-in'} />}></Route>
          <Route
            path="/auth/sign-in"
            element={
              <Suspense fallback={null}>
                <SignIn />
              </Suspense>
            }
          ></Route>
          <Route path="/habits" element={<PrivateRoute user={user} />}>
            {routes.map(({ path, extact, Component }, index) => (
              <Route
                key={index}
                path={path}
                extact={extact}
                element={
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ users: { user } }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(router);
