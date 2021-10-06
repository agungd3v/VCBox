<template>
  <div id="app" class="content__wrapper">
    <div class="box__wrapper justify-center">
      <div class="curtain"></div>
      <announcement v-if="alert" />
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
import Announcement from '@/components/utils/Announcement.vue'
export default {
  components: {
    ChatBox,
    Auth,
    Loader,
    Announcement
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      'loader': 'loader',
      'user': 'user',
      'alert': 'announcement'
    })
  },
  created() {
    this.loadApp()
  },
  methods: {
    loadApp() {}
  }
}
</script>
