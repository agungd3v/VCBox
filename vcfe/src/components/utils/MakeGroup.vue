<template>
  <div
    id="makegroup"
    class="absolute bg-eded w-full h-full z-10"
    :class="open ? 'open' : 'close'"
  >
    <div class="w-full h-full flex flex-col">
      <div class="bg-blue-400">
        <div class="bg-dodgerblue py-5 px-5 flex items-center gap-3 text-white">
          <span class="cursor-pointer" @click="closeMakeGroup">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </span>
          <span>Make Group</span>
        </div>
      </div>
      <form @submit.prevent="createGroup" class="bg-white py-5 px-5">
        <div class="flex flex-col gap-2 mb-5">
          <span class="text-sm">Group title</span>
          <input
            type="text"
            class="w-full p-3 text-sm outline-none bg-eded rounded"
            placeholder="Type your title group..."
            v-model="title"
          >
        </div>
        <div class="flex flex-col gap-2 mb-5">
          <span class="text-sm">Group description</span>
          <textarea
            rows="3"
            class="w-full p-3 text-sm outline-none bg-eded rounded"
            placeholder="Type your description..."
            v-model="description"
          ></textarea>
        </div>
        <button
          class="text-sm bg-dodgerblue text-white py-2 px-5 hover:bg-blue-500"
          :class="processing ? 'cursor-not-allowed' : ''"
          style="border-radius: 4px"
          type="submit"
          :disabled="processing"
        >
          <div v-if="processing" class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-disc animate-spin" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
            </svg>
            <span>Processing</span>
          </div>
          <div v-else>Create</div>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MakeGroup',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: '',
      description: '',
      processing: false
    }
  },
  computed: {
    ...mapGetters({
      'user': 'user'
    })
  },
  methods: {
    closeMakeGroup() {
      this.$emit('close', false)
    },
    createGroup() {
      this.processing = true
      if (!this.title) {
        this.processing = false
        return alert('Title group not allowed empty')
      }
      this.$socket.emit('makegroup', {
        title: this.title,
        desc: this.description
      }, this.user._id)
      setTimeout(() => {
        this.closeMakeGroup()
      }, 500)
      setTimeout(() => {
        this.title = ''
        this.description = ''
        this.processing = false
      }, 1000)
    }
  }
}
</script>