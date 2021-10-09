<template>
  <div
    id="profile"
    class="absolute bg-eded w-full h-full z-10"
    :class="open ? 'open' : 'close'"
  >
    <div class="w-full h-full flex flex-col">
      <div class="bg-blue-400">
        <div class="bg-dodgerblue py-5 px-5 flex items-center gap-3 text-white">
          <span class="cursor-pointer" @click="closeProfile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </span>
          <span>Profile</span>
        </div>
        <div class="flex py-5 justify-center">
          <div
            class="w-56 h-56 rounded-full overflow-hidden relative cursor-pointer profile__img_expand"
            @click="$refs.changePhoto.click()"
          >
            <img src="@/assets/images/profile.jpeg" class="w-56 h-56 rounded-full">
            <input type="file" ref="changePhoto" @change="changePhoto" style="display: none">
          </div>
        </div>
      </div>
      <div class="bg-white py-5 px-5">
        <span>{{ user.fullname }}</span>
      </div>
      <div class="py-5 px-5">
        <span class="text-xs leading-none text-gray-500">
          This is not your username or pin. This name will be visible to your VCBox contacts.
        </span>
      </div>
      <div class="py-5 px-5">
        <button
          class="bg-dodgerblue text-white w-full py-3 hover:bg-blue-500"
          style="border-radius: 4px"
          @click="signout"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      'user': 'user'
    })
  },
  mounted() {
    this.$socket.on('rgdrive', payload => {
      console.log(payload)
    })
  },
  methods: {
    closeProfile() {
      this.$emit('close', false)
    },
    signout() {
      this.$store.dispatch('setLoader', JSON.stringify({
        status: true,
        message: 'Separate user...'
      }))
      setTimeout(() => {
        const signout = this.$store.dispatch('logout', true)
        if (signout) this.$store.dispatch('setLoader', JSON.stringify({
          status: false,
          message: ''
        }))
      }, 5000)
    },
    changePhoto() {
      this.$socket.emit('changePhoto', evt.target.files[0])
    }
  }
}
</script>