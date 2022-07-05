<template>
  <div class="px-14 mt-12">
    <div id="re-element"></div>
    <form v-if="smsSent == false" id="sign-in-form">
      <!-- Input to enter the phone number -->
      <div class="flex relative shadow-md">
        <div
          class="absolute inset-y-0 left-0 pl-3 my-auto align-middle flex text-gray-300 text-center pointer-events-none"
        >
          <p class="flex items-middle">(+44)0</p>
        </div>
        <input
          v-model="userPhone"
          type="tel"
          id="phone-number"
          class="px-3 py-4 flex-1 pl-16 font-extralight text-gray-600 relative bg-opacity-0 bg-transparent border-2 border-gray-900 bg-gray-800outline-none focus:z-10 focus:outline-none w-full"
        />
        <label
          class="absolute top-2.5 ml-4 px-8 pt-1 -z-1 text-normal font-light duration-300 origin-0 text-gray-500"
          for="phone-number"
        >
          Enter your phone number...
        </label>
        <!-- Sign-in button -->
        <button
          @click.prevent="SignIn"
          class="flex-0 px-4 border-2 border-gray-900"
          id="sign-in-button"
        >
          Sign-in
        </button>
      </div>
    </form>

    <form v-else id="verification-code-form">
      <!-- Input to enter the verification code -->
      <div class="flex">
        <input v-model="conCode" class="" type="text" id="verification-code" />
        <label class="" for="verification-code">
          Enter the verification code...
        </label>
      </div>
      <!-- Button that triggers code verification -->
      <button
        @click.prevent="confirmCode"
        class="text-grey-800"
        id="verify-code-button"
        value="Verify Code"
      >
        Verify code
      </button>
      <!-- Button to cancel code verification -->
      <button class="" id="cancel-verify-code-button">Cancel</button>
    </form>
    <div id="phone-sign-in-recaptcha"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'

const auth = getAuth()
const userPhone = ref(null)
const phoneCode = ref('+44')
const conCode = ref('')
const smsSent = ref(false)
const confirmationResult = ref(null)

const initRecaptcha = () => {
  setTimeout(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response)
        },
      },
      auth,
    )
  }, 1000)
}

initRecaptcha()

const SignIn = async () => {
  const appVerifier = window.recaptchaVerifier
  const phonenumber = `${phoneCode.value}${userPhone.value}`
  console.log(`${phoneCode.value}${userPhone.value}`)

  signInWithPhoneNumber(auth, phonenumber, appVerifier)
    .then((confirmationresult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // ...
      window.confirmationResult = confirmationresult
      smsSent.value = true
      alert('SMS sent')
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      //   window.recaptchaVerifier.render().then(function (widgetId) {
      //     // grecaptcha.reset(widgetId)
      //   })
      console.log('Theres been an error', error)
    })
}

const confirmCode = async () => {
  const code = conCode.value
  try {
    const result = await confirmationResult.value.confirm(code)
    // User signed in successfully.
    const user = result.user
    console.log('User details are ', user)
    // ...
  } catch (error) {
    // User couldn't sign in (bad verification code?)
    // ...
    console.log('BIG ERROR', error)
  }
}
</script>

<style scoped>
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-3.5 px-6;
}
input:focus-within ~ label {
  @apply text-blue-500;
}
</style>
