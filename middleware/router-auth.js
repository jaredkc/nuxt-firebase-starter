export default function({ store, redirect, route }) {
  if (!isLogin(store) && isAdminRoute(route)) {
    return redirect('/signin')
  }
}

const isLogin = store => {
  return store && store.state && store.state.user.signedIn
}

const isAdminRoute = route => {
  if (
    route.matched.some(
      record => record.path === '/admin' || record.path === '/account'
    )
  ) {
    return true
  }
}
