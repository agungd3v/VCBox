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
        socket.emit('lists_conversation', store.state.user._id)
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

    socket.on("start_conversation", (data, type) => {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        if (type == 'single') {
          vuex.getters.conversation.ray = data.message
          store.dispatch('setConversation', JSON.stringify(vuex.getters.conversation))
          socket.emit("join_conversation", vuex.getters.conversation.ray._id, vuex.getters.conversation.ray)
        }
        if (type == 'group') {
          vuex.getters.gconversation.ray = data.message
          store.dispatch('setGconversation', JSON.stringify(vuex.getters.gconversation))
          socket.emit('join_gconversation', vuex.getters.gconversation.ray)
        }
      }
    })

    socket.on("comming_message", (data, type) => {
      if (type == 'single') {
        vuex.getters.conversation.ray = data.message
        store.dispatch('setConversation', JSON.stringify(vuex.getters.conversation))
      }
      if (type == 'group') {
        vuex.getters.gconversation.ray = data.message
        store.dispatch('setGconversation', JSON.stringify(vuex.getters.gconversation))
      }
      setTimeout(() => {
        const container = document.querySelectorAll('.is_message__content')
        container[container.length - 1].scrollIntoView()
      }, 500)
    })

    socket.on('update_list_after_send_message', (data, type) => {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        if (type == 'single') {
          const filtering = data.message.is_user.filter(dax => dax._id == storage.user._id)
          if (filtering[0]._id == storage.user._id) {
            socket.emit('lists_conversation', storage.user._id)
          }
        }
        if (type == 'group') {
          const isusr = data.message.is_user.filter(dax => dax._id == storage.user._id)
          const isadm = data.message.is_admin.filter(dx => dx._id == storage.user._id)
          if ((isusr.length > 0 && isusr[0]._id == storage.user._id) || (isadm.length > 0 && isadm[0]._id == storage.user._id)) {
            socket.emit('lists_conversation', storage.user._id)
          }
        }
      }
    })

    socket.on('lists_comming', data => {
      store.dispatch('setLists', data.message)
    })

    socket.on('photo_changed', data => {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        if (storage.user._id == data.message._id) {
          localStorage.setItem('bearer', JSON.stringify({ user: data.message }))
          store.commit('initializeapp')
        }
      }
    })

    socket.on('groupcreated', () => {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        socket.emit('lists_conversation', storage.user._id)
      }
    })
  }
}