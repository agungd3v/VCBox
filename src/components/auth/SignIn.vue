<template>
  <div class="w-full p-14">
    <h3 class="text-center text-2xl font-bold">Sign In</h3>
    <form @submit.prevent="signin" class="mt-12">
      <div class="mb-5">
        <vue-phone-number-input v-model="logPhone" />
      </div>
      <div class="mb-5">
        <input type="password" class="custom__input_field" v-model="logPassword" placeholder="Password">
      </div>
      <div class="mb-5">
        <button type="submit" class="custom__btn_field">Sign In</button>
      </div>
      <hr>
      <div class="mt-5">
        <h5 class="font-semibold mb-2">Disclaimer 🙈</h5>
        <p class="text-sm text-gray-500">
          All the materials on ChatBox’s Website are provided "as is". ChatBox makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, ChatBox does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  name: 'SignIn',
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      logPhone: null,
      logPassword: null
    }
  },
  methods: {
    async signin() {
      try {
        if (!this.email || !this.password) return console.error('fields is required')
        const request = await this.axios.post('/login', {
          usormail: this.email,
          pwd: this.password
        })
        if (request.status) {
          this.$store.dispatch('setUser', request.message.user)
          this.$store.dispatch('setToken', request.message.token)
          localStorage.setItem('bearer', JSON.stringify({
            user: this.$store.state.user,
            token: this.$store.state.token
          }))
          return this.$router.push({ name: 'Home' })
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>