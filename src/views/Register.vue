<template>
  <div class="container register mx-auto flex justify-between flex-wrap">
    <div class="p-5 w-full md:w-1/2">
      <div class="steps flex justify-between items-center">
        <span
          class="step step1"
          :class="step1 ? 'active' : ''"
          @click="changeStep('step1')"
        >
          1
        </span>
        <span class="step" :class="step2 ? 'active' : ''">2</span>
        <span class="step" :class="step3 ? 'active' : ''">3</span>
      </div>
      <free-trial v-if="step1" class="form px-4 mt-4" />
      <div class="verification" v-if="step2">
        <form class="form px-4 mt-4" @submit.prevent="">
          <span class="block mb-4 text-center">
            <font-awesome-icon
              class="icon text-primary"
              :icon="['fas', 'comment-sms']"
            />
            <!-- <i class="fa-solid fa-comment-sms"></i> -->
          </span>
          <h2 class="font-bold text-xl text-center mb-4">
            {{ $t('misc.Phone number verification') }}
          </h2>
          <p class="text-gray-400 text-center mb-4">
            {{ $t('misc.Enter the code sent to') }}
            <span class="text-black font-bold">1101010101010</span>
          </p>
          <div class="form-inputs text-center">
            <input
              id="verfication"
              class="w-3/4"
              type="number"
              v-model="verfication"
              :placeholder="$t('placeholder.verfication')"
            />
          </div>
          <p class="text-center text-gray-400 mt-4">
            {{ $t('misc.Didnt receive the code') }}
            <span class="text-primary font-bold">
              {{ $t('buttons.RESEND') }}
            </span>
          </p>

          <button
            class="btn bg-secondary w-full mt-11 font-bold text-white px-4 py-4 rounded"
          >
            {{ $t('buttons.VERIFY') }}
          </button>
        </form>
      </div>
      <div class="result" v-if="step3">
        <div class="mt-11 p-5 border">
          <h2 class="font-bold text-xl text-center mb-4">
            {{ $t('misc.your free trial details') }}
          </h2>
        </div>
      </div>
    </div>
    <div class="info w-full md:flex-1 p-5">
      <h1 class="text-3xl text-primary">
        {{ $t('misc.introTitle') }}
      </h1>
      <h2 class="mt-11 text-lg line-height">
        {{ $t('misc.introDesc') }}
      </h2>
    </div>
  </div>
</template>

<script>
import FreeTrial from '@/components/FreeTrial.vue'
export default {
  components: { FreeTrial },
  data() {
    return {
      step1: false,
      step2: true,
      step3: false,
    }
  },
  methods: {
    changeStep(e) {
      this.step1 = false
      this.step2 = false
      this.step3 = false
      this[e] = true
    },
  },
}
</script>

<style scoped lang="scss">
.register {
  min-height: calc(100% - 80px) !important;
  margin-top: 150px;
}
.steps {
  position: relative;
  max-width: 450px;
  margin: 0 auto;
  &::before {
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 2px;
    background: #055e93;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}
span.step {
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background: #fff;
  border: 1px solid #f8ac09;
  &.step1 {
    cursor: pointer;
  }
  &.active {
    background: #f8ac09;
    color: #fff;
  }
}
.icon {
  font-size: 80px;
}
</style>
