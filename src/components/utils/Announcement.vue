<template>
  <div class="absolute z-50" id="announcement">
    <div
      style="border-radius: 4px"
      class="px-6 py-2 text-center text-white"
      :class="background"
    >
      <span class="font-bold text-sm">{{ message }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Announcement',
  props: ['message', 'background']
}
</script>