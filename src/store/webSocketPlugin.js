export default function webSocketPlugin (socket) {
  return store => {
    store.$socket = socket
    socket.on('connect_error', () => store.dispatch('setLoader', true))
    socket.on('connect', () => store.dispatch('setLoader', false))
  }
}