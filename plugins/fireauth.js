import { auth } from '@/fireinit.js'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        store.commit('user/setUser', user)
      } else {
        store.commit('user/setNoUser')
      }
      resolve()
    })
  })
}
