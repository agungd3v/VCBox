<template>
  <div class="w-full p-14">
    <h3 class="text-center text-2xl font-bold">Sign Up</h3>
    <form class="mt-12">
      <div class="mb-5">
        <input type="text" class="custom__input_field" v-model="regName" autocomplete="off" placeholder="Full name">
      </div>
      <div class="mb-5">
        <input type="email" class="custom__input_field" v-model="regEmail" autocomplete="off" placeholder="Email address">
      </div>
      <div class="mb-5">
        <vue-phone-number-input v-model="regPhone" />
      </div>
      <div class="mb-5">
        <input type="password" class="custom__input_field" v-model="regPassword" placeholder="Password">
      </div>
      <div class="mb-5 flex gap-1">
        <div>
          <label class="check__container">
            <input type="checkbox">
            <span class="check__mark"></span>
          </label>
        </div>
        <div>
          <p class="text-sm text-gray-500">
            By accessing this Website, accessible from VCBox community, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
          </p>
        </div>
      </div>
      <div class="mb-5">
        <button type="submit" class="custom__btn_field">Sign Up</button>
      </div>
    </form>
  </div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  name: 'SignUp',
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      regName: null,
      regEmail: null,
      regPhone: null,
      regPassword: null
    }
  }
}
</script>