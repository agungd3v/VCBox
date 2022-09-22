<template>
  <div class="flex box__shadow">
    <div class="vh-90 w-full px-0 bg-white">
      <div class="flex h-full gap-5">
        <sign-in />
        <div class="border__light"></div>
        <sign-up />
      </div>
    </div>
  </div>
</template>
<script>
import SignIn from '@/components/auth/SignIn.vue'
import SignUp from '@/components/auth/SignUp.vue'
export default {
  name: 'Auth',
  components: {
    SignIn,
    SignUp
  }
}
</script>