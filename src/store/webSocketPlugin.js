export default function webSocketPlugin (socket) {
  return store => {
    store.$socket = socket
    socket.on('connect_error', () => store.dispatch('setLoader', JSON.stringify({
      status: true,
      message: 'You are offline'
    })))
    socket.on('connect', () => store.dispatch('setLoader', JSON.stringify({
      status: false,
      message: ''
    })))

    socket.on("logregister", payload => {
      store.dispatch('setLoader', JSON.stringify({
        status: false,
        message: ''
      }))
      if (payload.status) {
        store.dispatch('setAnnouncement', JSON.stringify({
          status: true,
          message: 'Register successfully',
          background: 'bg-green-500'
        }))
      } else {
        store.dispatch('setAnnouncement', JSON.stringify({
          status: true,
          message: payload.message,
          background: 'bg-red-500'
        }))
      }
      // console.error(payload)
    })

    socket.on("loglogin", payload => {
      store.dispatch('setLoader', JSON.stringify({
        status: false,
        message: ''
      }))
      if (payload.status) {
        store.dispatch('setUser', payload.message)
        localStorage.setItem('bearer', JSON.stringify({
          user: store.state.user
        }))
        store.dispatch('setAnnouncement', JSON.stringify({
          status: true,
          message: 'Login successfully',
          background: 'bg-green-500'
        }))
      } else {
        store.dispatch('setAnnouncement', JSON.stringify({
          status: true,
          message: payload.message,
          background: 'bg-red-500'
        }))
      }
      // console.error(payload)
    })
  }
}