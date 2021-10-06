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
          <div class="w-56 h-56 rounded-full overflow-hidden">
            <img src="@/assets/images/profile.jpeg" class="w-56 h-56 rounded-full">
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
  methods: {
    closeProfile() {
      this.$emit('close', false)
    }
  }
}
</script>