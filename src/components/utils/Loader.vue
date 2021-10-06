<template>
  <div class="flex relative flex-col">
    <div class="relative flex flex-col w-20 h-20">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-dodgerblue opacity-75"></span>
      <span class="relative inline-flex justify-center items-center rounded-full h-20 w-20 bg-dodgerblue">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle-fill text-white cursor-pointer" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      </span>
    </div>
    <div
      class="absolute w-40"
      style="left: -25px; bottom: -65px"
    >
      <p class="text-xl">You are offline</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loader'
}
</script>