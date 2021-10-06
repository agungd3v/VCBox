<template>
  <div id="app" class="content__wrapper">
    <div class="box__wrapper justify-center">
      <div class="curtain"></div>
      <loader v-if="loader" />
      <div v-else class="container 2xl:px-20 mx-auto relative" id="content">
        <chat-box v-if="user" />
        <auth v-else />
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/tailwind.css'
import '@/assets/css/app.css'
import { mapGetters } from 'vuex'
import ChatBox from '@/components/app/ChatBox.vue'
import Auth from '@/components/app/Auth.vue'
import Loader from '@/components/utils/Loader.vue'
export default {
  components: {
    ChatBox,
    Auth,
    Loader
  },
  computed: {
    ...mapGetters({
      'loader': 'loader',
      'user': 'user'
    })
  },
  mounted() {
    this.testloader()
  },
  methods: {
    testloader() {
      this.$store.dispatch('setLoader', true)
      setTimeout(() => {
        this.$store.dispatch('setLoader', false)
      }, 5000);
    }
  }
}
</script>
