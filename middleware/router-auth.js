export default function({ store, redirect, route }) {
  if (!isSignedIn(store) && (isAdminRoute(route) || isAccountRoute(route))) {
    return redirect('/signin');
  }

  if (isSignedIn(store) && isSignInRoute(route)) {
    return redirect('/');
  }
}

const isSignedIn = store => {
  return store && store.state && store.state.user.signedIn;
};

const isAdminRoute = route => {
  if (route.matched.some(record => record.path.includes('/admin'))) {
    return true;
  }
};

const isAccountRoute = route => {
  if (route.matched.some(record => record.path.includes('/account'))) {
    return true;
  }
};

const isSignInRoute = route => {
  if (route.matched.some(record => record.path.includes('/sign'))) {
    return true;
  }
};
