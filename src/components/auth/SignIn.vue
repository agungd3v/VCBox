<template>
  <div class="w-full p-14">
    <h3 class="text-center text-2xl font-bold">Sign In</h3>
    <form @submit.prevent="signin" class="mt-12">
      <div class="mb-5">
        <vue-phone-number-input
          @update="checkNumber"
          v-model="dumpNumber"
          :no-country-selector="true"
          :default-country-code="defaultCountry"
          :valid-color="validColor"
          :color="color"
          :show-code-on-list="true"
        />
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
          All the materials on VCBox’s Website are provided "as is". Community makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, VCBox does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
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
      logPassword: null,

      dumpNumber: null,
      defaultCountry: 'ID',
      color: '#1E90FF',
      validColor: '#1E90FF'
    }
  },
  methods: {
    async signin() {
      if (!this.logPhone || !this.logPassword) return false
      this.$store.dispatch('setLoader', JSON.stringify({
        status: true,
        message: 'Logging...'
      }))
      try {
        await this.$socket.emit('login', {
          phone: this.logPhone,
          password: this.logPassword
        })
      } catch (error) {
        console.error(error)
      }
    },
    checkNumber(payload) {
      if (payload.countryCode == 'ID') {
        this.color = payload.isValid ? '#1E90FF' : '#EF4444'
        this.logPhone = payload.formattedNumber
      }
    }
  }
}
</script>