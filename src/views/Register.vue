<template>
  <div class="container register mx-auto flex justify-between flex-wrap">
    <div class="p-5 w-full md:w-1/2">
      <div></div>
      <div class="steps flex justify-between items-center">
        <span
          class="step step1"
          :class="steps.step1 ? 'active' : ''"
          @click="changeStep('step1')"
        >
          1
        </span>
        <span class="step" :class="steps.step2 ? 'active' : ''">
          2
        </span>
        <span class="step" :class="steps.step3 ? 'active' : ''">
          3
        </span>
      </div>
      <div class="trial form px-4 mt-4" v-if="steps.step1">
        <h2 class="text-center font-bold text-xl text-primary mb-4">
          {{ $t('misc.Enter your data to get your free trial copy') }}
        </h2>
        <form class="p-5" @submit.prevent="getCode">
          <div class="form-inputs">
            <input
              class="w-full"
              type="text"
              required
              v-model="userData.name"
              :placeholder="$t('placeholder.name')"
            />
          </div>
          <div class="form-inputs flex justify-between">
            <select
              class="w-4/12 order-1"
              :class="$i18n.locale == 'en' ? 'mr-2' : 'ml-2'"
              name="country-code"
              v-model="userData.countryCode"
            >
              <option
                v-for="country in countries"
                :key="country"
                :value="country.code"
                name="country-code"
              >
                {{ country.code }}
              </option>
            </select>
            <input
              class="w-8/12"
              type="phone"
              required
              v-model="userData.phone"
              oninput="this.value = this.value.replace(/^0/g, '');"
              :placeholder="$t('placeholder.phone')"
            />
          </div>

          <div class="form-inputs">
            <input
              class="w-full"
              type="email"
              v-model="userData.email"
              required
              :placeholder="$t('placeholder.email')"
            />
          </div>
          <div class="form-inputs" v-if="activity">
            <select
              name="country-code"
              required
              class="w-full"
              v-model="userData.work"
            >
              <option value="" disabled>
                {{ $t('placeholder.crmUsingFor') }}
              </option>
              <option
                v-for="item in activity"
                :key="item.id"
                :value="item.id"
                name="work-code"
              >
                {{ item.value }}
              </option>
            </select>
          </div>
          <div class="form-inputs">
            <input
              class="w-full"
              type="text"
              required
              v-model="userData.employers"
              :placeholder="$t('placeholder.number')"
            />
          </div>

          <div v-if="errMsg" class="err-msg">{{ errMsg }}</div>

          <button
            type="submit"
            id="sign-in-button"
            class="mt-4 bg-secondary py-2 w-full font-bold rounded-lg px-4 text-white"
          >
            <span class="spinner-border" v-if="loading"></span>
            <span v-else>
              {{ $t('buttons.Start Now') }}
            </span>
          </button>
        </form>
      </div>
      <!-- <free-trial  @data="getdata" class="form px-4 mt-4" /> -->
      <div class="verification" v-if="steps.step2">
        <form class="form px-4 mt-4" @submit.prevent="verfiy">
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
            <span class="text-black font-bold">
              {{ `${userData.countryCode}${userData.phone}` }}
            </span>
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
          <div v-if="errMsg" class="err-msg">{{ errMsg }}</div>
          <p class="text-center text-gray-400 mt-4">
            {{ $t('misc.Didnt receive the code') }}
            <button
              class="text-primary font-bold pointer"
              @click="getCode"
              v-if="time == 0"
            >
              {{ $t('buttons.RESEND') }}
            </button>
            <span v-else class="text-primary font-bold">s {{ time }}</span>
          </p>

          <button
            class="btn bg-secondary w-full mt-11 font-bold text-white px-4 py-4 rounded"
            :disabled="verfication == ''"
          >
            <span class="spinner-border" v-if="loading"></span>
            <span v-else>
              {{ $t('buttons.VERIFY') }}
            </span>
          </button>
        </form>
      </div>
      <div class="result" v-if="steps.step3">
        <div class="mt-11 px-4 p-5 border">
          <h2 class="font-bold text-xl text-center mb-4">
            {{ $t('misc.your free trial details') }}
          </h2>
          <div class="info">
            <p v-if="demoData.link" class="flex-col">
              <span>
                {{ $t('misc.Link') }}
              </span>
              <a :href="demoData.link" target="_blank">{{ demoData.link }}</a>
            </p>

            <p v-if="demoData.username">
              <span>
                {{ $t('misc.username') }}
              </span>

              <span class="inline-block flex-1 py-2 px-4 border rounded">
                {{ demoData.username }}
              </span>
            </p>
            <p v-if="demoData.password">
              <span>
                {{ $t('misc.password') }}
              </span>

              <span class="inline-block flex-1 py-2 px-4 border rounded">
                {{ demoData.password }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="info w-full md:flex-1 p-5" v-if="homeDesc">
      <h1 class="text-3xl text-primary">
        {{ homeDesc.title }}
      </h1>
      <h2 class="mt-11 text-lg line-height">
        {{ homeDesc.description }}
      </h2>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'
import { reactive, ref } from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      activity: null,
      homeDesc: null,
    }
  },

  methods: {
    getWork() {
      this.axios.get('lists').then((data) => {
        this.activity = data.data.lists.Work
        this.homeDesc = data.data.lists.home[0]
      })
    },
  },
  mounted() {
    this.getWork()
  },

  setup() {
    const countries = [
      {
        code: '+971',
        name: 'United Arab Emirates',
      },
      {
        code: '+965',
        name: 'Kuwait',
      },
      {
        code: '+973',
        name: 'Bahrain',
      },

      {
        code: '+20',
        name: 'Egypt',
      },
      {
        code: '+962',
        name: 'Jordan',
      },
      {
        code: '+968',
        name: 'Oman',
      },
      {
        code: '+974',
        name: 'Qatar',
      },
      {
        code: '+966',
        name: 'Saudi Arabia',
      },
    ]

    const auth = getAuth()
    const time = ref(60)
    const userData = reactive({
      name: '',
      email: '',
      employers: '',
      phone: '',
      countryCode: '+20',
      work: '',

      country: '',
    })
    const verfication = ref('')
    let loading = ref(false)
    const demoData = reactive({
      link: '',
      username: '',
      password: '',
    })
    const errMsg = ref(null)

    const initRecaptcha = () => {
      setTimeout(() => {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            'repatch-container',
            {
              size: 'invisible',
              // callback: (response) => {
              //   console.log(response)
              // },
            },
            auth,
          )
        }
      }, 1000)
    }
    initRecaptcha()

    async function getCode() {
      loading.value = true
      errMsg.value = ''

      let countryName = countries.filter((el) => {
        return el.code == userData.countryCode
      })

      userData.country = countryName[0].name

      if (userData.phone.length != 10) {
        loading.value = false
        errMsg.value = 'رقم الهاتف غير صحيح'
      } else {
        const appVerifier = window.recaptchaVerifier
        const phoneNumber = `${userData.countryCode}${userData.phone}`
        axios.post('check-phone', { phone: phoneNumber }).then((data) => {
          if (data.data.status == 0) {
            initRecaptcha()
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
                changeStep('step2')
                errMsg.value = ''
                loading.value = false
                time.value = 60
              })
              .catch(() => {
                errMsg.value = 'رقم الهاتف غير صحيح'
                loading.value = false
              })
          } else if (data.data.status == 1) {
            errMsg.value = ''
            changeStep('step3')
            demoData.link = data.data.data.link
            demoData.username = data.data.data.username
            demoData.password = data.data.data.password
            loading.value = false
            userData.name = ''
            userData.email = ''
            userData.employers = ''
            userData.work = ''
            userData.phone = ''
            userData.country = ''
          }
        })
      }
    }

    function getCountryName(e) {
      console.log(e)
    }

    async function verfiy() {
      loading.value = true
      const code = verfication.value

      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user
          let frmData = new FormData()
          const phoneNumber = `${userData.countryCode}${userData.phone}`
          frmData.append('name', userData.name)
          frmData.append('email', userData.email)
          frmData.append('phone', phoneNumber)
          frmData.append('nemployees', userData.employers)
          frmData.append('activity', userData.work)
          frmData.append('country', userData.country)
          axios.post('add-client', frmData).then((data) => {
            changeStep('step3')
            demoData.link = data.data.data.link
            demoData.username = data.data.data.username
            demoData.password = data.data.data.password
            loading.value = false
            userData.name = ''
            userData.email = ''
            userData.employers = ''
            userData.work = ''
            userData.country = ''
          })
          console.log(user)
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          errMsg.value = error.message
          errMsg.value = 'الكود غير صحيح او منتهي جرب مره اخري'
          loading.value = false
        })
    }

    let steps = reactive({
      step1: true,
      step2: false,
      step3: false,
    })

    function changeStep(e) {
      steps.step1 = false
      steps.step2 = false
      steps.step3 = false
      errMsg.value = ''
      steps[e] = true
    }

    const countDown = setInterval(() => {
      time.value -= 1

      if (time.value == 0) clearInterval(countDown)
    }, 1000)

    return {
      verfication,
      verfiy,
      getCountryName,
      errMsg,
      userData,
      countries,
      loading,
      getCode,
      time,
      changeStep,
      demoData,
      steps,
    }
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

.result {
  max-width: 450px;
  margin: 0 auto;
}
.result p {
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  margin-bottom: 10px;
  &:first-child {
    a {
      margin: 10px 0;
      color: #055e93;
    }
  }

  a,
  span {
    text-align: center;
    font-weight: 700;

    &:first-child {
      width: 100px;
      font-size: 14px;
      align-self: center;
    }
  }
}

.pointer {
  cursor: pointer;
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
select {
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  &.order-1 {
    margin: 0 8px 8px 0;
  }
}
.fade-leave-to,
.fade-leave-from {
  opacity: 0;
}
.fade-enter-from .trial,
.fade-leave-to .trial {
  transform: scale(1.1);
}

.err-msg {
  color: red;
  text-align: center;
}
.spinner-border {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: 0.75s linear infinite spinner-border;
}
@keyframes spinner-border {
  100% {
    transform: rotate(360deg);
  }
}
</style>
