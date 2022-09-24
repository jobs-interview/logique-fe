<template>
  <div>
    <b-card>
      <b-card-text>
        <label class="body-medium text-primary">User Name </label>
        <input
          v-model="form.userName"
          type="text"
          class="form-control"
          placeholder="User name"
          :class="{ 'is-invalid': submitted && $v.form.userName.$error }"
          @keyup.enter="login"
        />
        <div
          v-if="submitted && !$v.form.userName.required"
          class="invalid-feedback"
        >
          Silakan masukkan username
        </div>

        <label class="body-medium text-primary mt-2">Password </label>
        <div class="input-group input-group-merge">
          <input
            id="password"
            v-model="form.password"
            :type="typePassword"
            class="form-control"
            placeholder="Password"
            :class="{ 'is-invalid': submitted && $v.form.password.$error }"
            @keyup.enter="login"
          />

          <div class="input-group-append" data-password="false">
            <div class="input-group-text">
              <i
                :class="`${iconPassword} eye`"
                aria-hidden="true"
                style="cursor: pointer"
                @click="toggleEye"
              />
            </div>
          </div>
          <div
            v-if="submitted && !$v.form.password.required"
            class="invalid-feedback"
          >
            Silakan masukkan password
          </div>
        </div>

        <Skeleton :loading="isLoading" />
        <Alert v-if="isAlert" :mode="mode" :message="message" class="mt-2" />
        <div class="d-flex justify-content-center mt-2">
          <b-button variant="primary" :disabled="isLoading" @click="login"
            >Log In</b-button
          >
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { Skeleton } from 'vue-loading-skeleton'
export default {
  components: {
    Skeleton,
  },
  layout: 'google-auth',
  validations: {
    form: {
      userName: {
        required,
      },
      password: {
        required,
      },
    },
  },
  data() {
    return {
      form: {
        userName: null,
        password: null,
      },
      isAlert: false,
      mode: 'success',
      message: null,
      iconPassword: 'fa fa-eye-slash',
      typePassword: 'password',
      isEye: true,
      submitted: false,
      isLoading: false,
    }
  },
  methods: {
    toggleEye() {
      this.isEye = !this.isEye
      if (this.isEye) {
        this.iconPassword = 'fa fa-eye-slash'
        this.typePassword = 'password'
      } else {
        this.iconPassword = 'fa fa-eye'
        this.typePassword = 'text'
      }
    },
    async login() {
      this.isAlert = false
      this.submitted = true
      this.isLoading = true
      this.$v.$touch()
      console.log(this.$v)
      if (this.$v.$invalid) {
        console.log('invalid')
      } else {
        try {
          await this.$auth.loginWith('local', {
            data: {
              identifier: this.form.userName,
              password: this.form.password,
            },
          })
          window.location.replace('/dashboard')
        } catch (error) {
          if (
            error.response.data !== undefined &&
            error.response.data.data !== undefined &&
            error.response.data.data.length > 0 &&
            error.response.data.data[0].messages !== undefined &&
            error.response.data.data[0].messages.length > 0 &&
            error.response.data.data[0].messages[0].message !== undefined
          ) {
            this.mode = 'error'
            this.message = error.response.data.data[0].messages[0].message
            this.isAlert = true
          }
        }
      }
      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
