<template>
  <div class="flex box__shadow">
    <div class="vh-90 px-0 bg-white">
      <div class="box__left__wrapper relative overflow-hidden">
        <profile :open="profile" @close="boxProfile" />
        <make-group :open="makegroup" @close="boxGroup" />
        <header class="box__header_left">
          <div class="box__profile cursor-pointer" @click="profile = true">
            <div class="profile">
              <img
                :src="user.photo ? `https://drive.google.com/uc?id=${user.photo}&export=view` : '/favicon.png'"
                class="profile__img skeleton-loader"
                draggable="false"
              >
            </div>
          </div>
          <div class="box__action_left">
            <div class="action__left">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
            <div class="action__left ml-10px">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
              </svg>
            </div>
            <div class="action__left ml-10px">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
            </div>
          </div>
        </header>
        <div class="px-4 py-3 flex items-center gap-3 bg-dodgerblue box__left_group text-white cursor-pointer" @click="makegroup = true">
          <div class="w-10 h-10 bg-white rounded-full text-dodgerblue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>
          <span>Make group</span>
        </div>
        <div class="box__search">
          <div class="search__wrapper rounded-pill">
            <div class="search__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <div class="search__input">
              <input type="text" class="input__text" v-model="search" autocomplete="off" placeholder="Search or start new chat">
            </div>
          </div>
        </div>
        <div class="box__contact">
          <div v-if="search !== ''">
            <div
              v-for="(result, index) in searchResults"
              :key="index"
              class="contact__wrapper"
              @click.prevent="getConversationInfo(result)"
            >
              <div class="contact__img">
                <div class="border__light wrapper__img__contact">
                  <img
                    :src="result.photo ? `https://drive.google.com/uc?id=${result.photo}&export=view` : '/favicon.png'"
                    class="img__contact skeleton-loader"
                  >
                </div>
              </div>
              <div class="contact__info">
                <div class="contact__chat">
                  <p v-if="result.fullname" class="mb-0 font-semibold">{{ result.fullname }}</p>
                  <p v-else class="mb-0 font-semibold">{{ result.title }}</p>
                </div>
                <div class="contact__chat">
                  <span v-if="result.fullname" class="text-sm">Type message for this user</span>
                  <span v-else class="text-sm">Type message to this group</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-if="loadlists">
              <div
                v-for="i in 8"
                :key="i"
                class="contact__wrapper"
              >
                <div class="contact__img">
                  <div class="border__light wrapper__img__contact">
                    <div class="img__contact skeleton-loader"></div>
                  </div>
                </div>
                <div class="contact__info">
                  <div class="contact__chat">
                    <div class="mt-2 mb-3 skeleton-loader skeleton-text"></div>
                  </div>
                  <div class="contact__chat">
                    <div class="skeleton-loader skeleton-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div id="group">
                <div
                  v-for="(recent, i) in lists.group"
                  :key="i"
                  class="contact__wrapper"
                  @click.prevent="getConversationInfo(recent)"
                >
                  <div class="contact__img">
                    <div class="border__light wrapper__img__contact">
                      <img
                        :src="recent.photo ? `https://drive.google.com/uc?id=${recent.photo}&export=view` : '/favicon.png'"
                        class="img__contact skeleton-loader"
                      >
                    </div>
                  </div>
                  <div class="contact__info">
                    <div class="contact__chat">
                      <p class="mb-0 font-semibold">{{ recent.title }}</p>
                    </div>
                    <div v-if="recent.messages.length > 0" class="contact__chat">
                      <span class="text-sm">
                        {{ parseLastMessageConversation(recent.messages).is_user._id == user._id ? 'You:' : parseLastMessageConversation(recent.messages).is_user.fullname.split(' ')[0].toString() + ':' }}
                        {{ parseLastMessageConversation(recent.messages).message }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="single">
                <div
                  v-for="(recent, i) in lists.single"
                  :key="i"
                  class="contact__wrapper"
                  @click.prevent="getConversationInfo(parseUserConversation(recent.is_user))"
                >
                  <div class="contact__img">
                    <div class="border__light wrapper__img__contact">
                      <img
                        :src="parseUserConversation(recent.is_user).photo ? `https://drive.google.com/uc?id=${parseUserConversation(recent.is_user).photo}&export=view` : '/favicon.png'"
                        class="img__contact skeleton-loader"
                      >
                    </div>
                  </div>
                  <div class="contact__info">
                    <div class="contact__chat">
                      <p class="mb-0 font-semibold">{{ parseUserConversation(recent.is_user).fullname }}</p>
                      <small class="text-info">
                        {{ parseLastMessageConversation(recent.messages).parse_date }}
                      </small>
                    </div>
                    <div class="contact__chat">
                      <span class="text-sm">
                        {{ parseLastMessageConversation(recent.messages).message }}
                      </span>
                      <div class="contact__icon">
                        <div class="pinned__wrap">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 vh-90 px-0 bg-white">
      <div v-if="!conversation && !gconversation && !ingroup" class="relative h-full">
        <div class="bg-eded h-full flex flex-col justify-center items-center gap-5">
          <img src="/favicon.png" alt="icon" class="w-48">
          <h1 class="text-xl">
            Make conversation with
            <span class="text-dodgerblue font-bold">VCBox</span>
          </h1>
        </div>
      </div>
      <div
        v-if="loadconversation"
        class="h-full flex flex-col items-center justify-center bg-eded gap-10"
      >
        <conversation-loader />
        <h1 class="text-lg">Getting conversation</h1>
      </div>
      <div v-else class="h-full">
        <div v-if="conversation" class="box__right__wrapper">
          <header class="box__header_right">
            <div class="box__profile_contact">
              <div class="profile">
                <img
                  :src="conversation.ppl.photo ? `https://drive.google.com/uc?id=${conversation.ppl.photo}&export=view` : '/favicon.png'"
                  class="profile__img" draggable="false"
                >
              </div>
            </div>
            <div class="box__profile_ttl">
              <div class="contact__info py-0">
                <div class="contact__chat">
                  <p class="mb-0 font-semibold">{{ conversation.ppl.name }}</p>
                </div>
                <div class="contact__chat">
                  <!-- <span class="text-sm">6 Participans</span> -->
                </div>
              </div>
            </div>
            <div class="box__action_left">
              <div class="action__left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </div>
              <div class="action__left ml-10px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
              </div>
            </div>
          </header>
          <div class="box__chat">
            <div class="chat__wrapper">
              <div class="chat__box_wrapper">
                <div class="px-5">
                  <div v-if="conversation.ray" class="message__wrapper">
                    <div
                      v-for="(msg, index) in conversation.ray.messages"
                      :key="index"
                      class="is_message__content"
                      ref="msgContainer"
                      :class="msg.is_user._id == user._id || msg.is_user == user._id ? 'justify-end' : ''"
                    >
                      <div class="is_message__wrapper">
                        <div
                          class="is_message"
                          :class="msg.is_user._id == user._id || msg.is_user == user._id ? 'float-right text-right' : 'float-left'"
                          style="min-width: 100px"
                        >
                          <p v-if="msg.is_user._id != user._id">{{ msg.is_user.fullname }}</p>
                          <span>{{ msg.message }}</span>
                          <p>20:14</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form class="box__text_chat" @submit.prevent="sendMessage">
            <div class="chat__icon_left">
              <div class="chat__icon_wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
              </div>
              <div class="chat__icon_wrapper transform-rotate-scalex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
              </div>
            </div>
            <div class="chat__input_text">
              <input type="text" v-model="message" placeholder="Type a message" class="rounded-pill input_message">
            </div>
            <div class="chat__icon_right">
              <div class="chat__icon_wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>
            </div>
          </form>
        </div>
        <div v-if="gconversation && ingroup" class="box__right__wrapper">
          <header class="box__header_right overflow-hidden">
            <div class="box__profile_contact">
              <div class="profile">
                <img
                  :src="gconversation.ppl.photo ? `https://drive.google.com/uc?id=${gconversation.ppl.photo}&export=view` : '/favicon.png'"
                  class="profile__img" draggable="false"
                >
              </div>
            </div>
            <div class="box__profile_ttl">
              <div class="contact__info py-0">
                <div class="contact__chat">
                  <p class="mb-0 font-semibold">{{ gconversation.ray.title }}</p>
                </div>
                <div class="contact__chat">
                  <span class="text-xs">
                    {{ gconversation.ray.is_admin.length + gconversation.ray.is_user.length }}
                    Participans
                  </span>
                </div>
              </div>
            </div>
            <div class="box__action_left">
              <div class="action__left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </div>
              <div
                class="action__left ml-10px cursor-pointer" 
                @click.prevent="openGroupSettings(gconversation.ray)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
              </div>
            </div>
            <div
              class="absolute w-full h-full bg-eded left-0 transition-all duration-300 ease-in-out"
              :class="changeTitleGroup ? 'top-0' : '-top-20'"
            >
              <div
                class="h-full flex items-center"
                style="padding-left: 16px; padding-right: 16px"
              >
                <span
                  class="transform rotate-45 cursor-pointer"
                  style="margin-right: 16px"
                  @click="changeTitleGroup = false"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                  </svg>
                </span>
                <div class="flex-grow">
                  <input
                    type="text"
                    class="w-full h-10 rounded-md"
                    style="padding-left: 26px; padding-right: 26px; outline: none"
                    placeholder="Type new group name"
                    v-model="newGroupTitle"
                    :disabled="changeTitleProccess"
                  >
                </div>
                <button
                  class="px-5 h-10 bg-dodgerblue rounded text-white"
                  style="margin-left: 8px"
                  @click.prevent="submitNewTitle(gconversation.ray)"
                  :disabled="changeTitleProccess"
                >
                  <svg v-if="changeTitleProccess" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-disc animate-spin" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
                  </svg>
                  <span v-else>Submit</span>
                </button>
              </div>
            </div>
          </header>
          <div class="box__chat">
            <div class="chat__wrapper">
              <div class="chat__box_wrapper">
                <div class="px-5">
                  <div v-if="gconversation.ray" class="message__wrapper">
                    <div
                      v-for="(msg, index) in gconversation.ray.messages"
                      :key="index"
                      class="is_message__content"
                      ref="msgContainer"
                      :class="msg.is_user._id == user._id || msg.is_user == user._id ? 'justify-end' : ''"
                    >
                      <div class="is_message__wrapper">
                        <div
                          class="is_message"
                          :class="msg.is_user._id == user._id || msg.is_user == user._id ? 'float-right text-right' : 'float-left'"
                          style="min-width: 100px"
                        >
                          <p v-if="msg.is_user._id != user._id">{{ msg.is_user.fullname }}</p>
                          <span>{{ msg.message }}</span>
                          <p>20:14</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form class="box__text_chat" @submit.prevent="sendMessage">
            <div class="chat__icon_left">
              <div class="chat__icon_wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
              </div>
              <div class="chat__icon_wrapper transform-rotate-scalex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
              </div>
            </div>
            <div class="chat__input_text">
              <input type="text" v-model="message" placeholder="Type a message" class="rounded-pill input_message">
            </div>
            <div class="chat__icon_right">
              <div class="chat__icon_wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>
            </div>
          </form>
        </div>
        <div v-if="gconversation && !ingroup" class="box__right__wrapper">
          <div class="h-full bg-eded flex flex-col justify-center items-center">
            <div class="text-center">
              <img
                :src="gconversation.ppl.photo ? gconversation.ppl.photo : '/favicon.png'"
                class="w-40 h-40"
              >
              <h1 class="my-3 text-xl">{{ gconversation.ppl.name }}</h1>
              <button
                class="bg-dodgerblue px-5 py-2 text-white rounded"
                @click.prevent="joinGroup(gconversation.ppl.grpRyx)"
              >
                Join group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Profile from '@/components/utils/Profile.vue'
import MakeGroup from '@/components/utils/MakeGroup.vue'
import ConversationLoader from '@/components/utils/ConversationLoader.vue'
export default {
  name: 'ChatBox',
  components: {
    Profile,
    MakeGroup,
    ConversationLoader
  },
  data() {
    return {
      profile: false,
      makegroup: false,
      changeTitleGroup: false,
      changeTitleProccess: false,
      newGroupTitle: '',
      search: '',
      searchResults: [],
      message: ''
    }
  },
  computed: {
    ...mapGetters({
      'user': 'user',
      'conversation': 'conversation',
      'lists': 'lists',
      'gconversation': 'gconversation',
      'ingroup': 'ingroup',
      'loadconversation': 'loadconversation',
      'loadlists': 'loadlists'
    })
  },
  watch: {
    search(value) {
      if (value !== '') return this.$socket.emit('search', {
        keyword: value,
        userid: this.user._id
      })
    }
  },
  mounted() {
    this.$socket.on('resultsearch', data => {
      return this.searchResults = data.filter(dtx => {
        return dtx._id != this.user._id
      })
    })
    this.$socket.on('start_message', data => {
      this.conversation.ray = data
      this.$store.dispatch('setConversation', JSON.stringify(this.conversation))
    })
    this.$socket.on('start_gmessage', data => {
      this.gconversation.ray = data
      this.$store.dispatch('setGconversation', JSON.stringify(this.gconversation))
    })
  },
  methods: {
    boxProfile(props) {
      this.profile = props
    },
    boxGroup(props) {
      this.makegroup = props
    },
    getConversationInfo(data) {
      this.$store.dispatch('setLoadconversation', true)
      this.$store.dispatch(data.fullname ? "setConversation" : "setGconversation", JSON.stringify({
        ppl: {
          grpRyx: data.fullname ? null : data._id,
          name: data.fullname ? data.fullname : data.title,
          photo: data.photo,
        }
      }))
      if (data.fullname) {
        this.$socket.emit('conversation', { from: this.user._id, to: data._id })
      } else {
        this.$socket.emit('gconversation', data._id, this.user._id)
      }
    },
    sendMessage() {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        const msg = {
          is_user: storage.user._id,
          message: this.message,
          created_at: Date()
        }
        if (this.conversation) {
          this.conversation.ray.messages.push(msg)
          this.$store.dispatch("setConversation", JSON.stringify(this.conversation))
          this.$socket.emit('in_message', this.conversation.ray._id, msg)
        } else {
          this.gconversation.ray.messages.push(msg)
          this.$store.dispatch("setGconversation", JSON.stringify(this.gconversation))
          this.$socket.emit('in_gmessage', this.gconversation.ray._id, msg)
        }
      }
      setTimeout(() => this.scrollToBot(), 200)
      this.message = ''
    },
    parseUserConversation(arr) {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        const data = arr.filter(data => {
          if (data._id != storage.user._id) return data
        })
        return data[0]
      }
    },
    parseLastMessageConversation(arr) {
      const lastMessage = arr[arr.length - 1]
      
      const date = new Date(lastMessage.created_at)
      const getDate = date.getDate()
      const getMonth = date.getMonth() + 1
      const getYear = date.getFullYear()

      lastMessage.parse_date = `${getDate}/${getMonth}/${getYear}`
      return lastMessage
    },
    joinGroup(data) {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) this.$socket.emit('joingroup', data, storage.user._id)
    },
    openGroupSettings(data) {
      const storage = JSON.parse(localStorage.getItem('bearer'))
      if (storage) {
        const filteradm = data.is_admin.filter(dtx => dtx._id == storage.user._id)
        if (filteradm.length > 0) return this.changeTitleGroup = true
      }
    },
    submitNewTitle(data) {
      this.changeTitleProccess = true
      this.$socket.emit('changegrouptitle', data._id, this.newGroupTitle)
      setTimeout(() => {
        this.changeTitleGroup = false
        this.changeTitleProccess = false
        this.newGroupTitle = ''
      }, 3000);
    },
    scrollToBot() {
      const container = this.$refs.msgContainer
      if (container && container.length > 0) return container[container.length - 1].scrollIntoView()
    }
  }
}
</script>