<template>
  <div class="relative" :class="$i18n.locale === 'ar' ? 'is-rtl' : ''">
    <MainHeader class="fixed w-full" />
    <div>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'App',
  created() {
    if (this.$i18n.locale == 'ar') {
      document.title = 'رواد CRM | برنامج ادارة علاقات العملاء'
    } else {
      document.title = 'Rwad CRM | Client relations system'
    }
  },
  components: { MainHeader },
}
</script>

<style lang="scss">
.fade-in-left {
  animation: fade-in-left 1s linear forwards;
}
.fade-in-right {
  animation: fade-in-right 1s linear forwards;
}
.fade-in-bottom {
  animation: fade-in-bottom 1s linear forwards;
}

.form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 450px;
  .form-inputs {
    input,
    textarea,
    select {
      @apply px-4 py-2 mb-2 rounded-lg;
      border: 1px solid #ddd;
      outline: none;
    }
    textarea {
      min-height: 100px;
      resize: none;
    }
  }
}

@keyframes fade-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade-in-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
