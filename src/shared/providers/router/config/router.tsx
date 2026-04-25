import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../../../app';
import { CartPage } from '../../../../pages/CartPage';
import { FavoritesPage } from '../../../../pages/FavoritesPage';
import { HomePage } from '../../../../pages/HomePage';
import { NotFoundPage } from '../../../../pages/NotFoundPage';
import { ProductPage } from '../../../../pages/ProductPage';
import { ProfilePage } from '../../../../pages/ProfilePage';
import { SignInPage } from '../../../../pages/SignInPage';
import { SignUpPage } from '../../../../pages/SignUpPage';

export const  AppRoutes = {
  HOME :'home',
  FAVORITES: 'favorites',
  PRODUCTS: 'products',
  PROFILE: 'profile',
  CART: 'cart',
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutesKey = typeof AppRoutes[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutesKey, `/${string}` | '*'> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.FAVORITES]: '/favorites',
  [AppRoutes.PRODUCTS]: '/products/:productId',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.SIGNUP]: '/signup',
  [AppRoutes.SIGNIN]: '/signin',
  [AppRoutes.NOT_FOUND]: '*',
};

export const router = createBrowserRouter([
  {
    path: RoutePath[AppRoutes.HOME],
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RoutePath[AppRoutes.FAVORITES],
        element: <FavoritesPage />,
      },
      {
        path: RoutePath[AppRoutes.PRODUCTS],
        element: <ProductPage />,
      },
      {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage />,
      },
      {
        path: RoutePath[AppRoutes.CART],
        element: <CartPage />,
      },
      {
        path: RoutePath[AppRoutes.SIGNUP],
        element: <SignUpPage />,
      },
      {
        path: RoutePath[AppRoutes.SIGNIN],
        element: <SignInPage />,
      },

      // last route
      {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
      },
    ],
  },
]);

