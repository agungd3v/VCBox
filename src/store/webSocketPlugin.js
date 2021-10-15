import vuex from '../store'

export default function webSocketPlugin (socket) {
  return store => {
    store.$socket = socket
    socket.on('connect_error', () => store.dispatch('setLoader', JSON.stringify({
      status: true,
      message: 'You are offline'
    })))
    socket.on('connect', () => {
      store.dispatch('setLoader', JSON.stringify({ status: false, message: ''}))
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        socket.emit('lists_conversation', storage.user._id)
      }
    })

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
        socket.emit('lists_conversation', vuex.getters.user._id)
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
    })

    socket.on("start_conversation", data => {
      vuex.getters.conversation.ray = data.message
      store.dispatch('setConversation', JSON.stringify(vuex.getters.conversation))
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        socket.emit("join_conversation", vuex.getters.conversation.ray._id, vuex.getters.conversation.ray)
      }
    })

    socket.on("comming_message", data => {
      vuex.getters.conversation.ray = data.message
      store.dispatch('setConversation', JSON.stringify(vuex.getters.conversation))
    })

    socket.on('lists_comming', data => {
      store.dispatch('setLists', data.message)
    })
  }
}