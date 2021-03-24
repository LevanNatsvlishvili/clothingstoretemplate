import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Error404Page } from 'modules/ErrorsModule';
import Url from 'Paths';
import HomePage from 'Modules/HomePage';
import Auth from 'Modules/Authentication';
import Catalog from 'Modules/Catalog';
import Cart from 'Modules/Cart';

const routes = [
  {
    path: Url.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: Url.Auth,
    exact: true,
    component: Auth,
  },
  {
    path: Url.Catalog,
    exact: true,
    component: Catalog,
  },
  {
    path: Url.Cart,
    exact: true,
    component: Cart,
  },

];

export const RenderRoutes = (switchProps = {}) => {
  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )
      })}
    </Switch>
  );
};


export const Errors = [
  {
    path: '*',
    // component: Error404Page,
  },
];
