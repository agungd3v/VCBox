export default function webSocketPlugin (socket) {
  return store => {
    store.$socket = socket
    socket.on('connect_error', () => store.dispatch('setLoader', true))
    socket.on('connect', () => store.dispatch('setLoader', false))

    socket.on("logreg", payload => {
      if (payload.status) {
        store.dispatch('setLoader', false)
        console.log(payload)
      } else {
        console.error(payload)
      }
    })
  }
}