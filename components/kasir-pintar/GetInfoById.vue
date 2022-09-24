<template>
  <div>
    <div class="form-group row align-items-center">
      <label class="col-sm-2 col-form-label">Id </label>
      <div class="col-sm-6">
        <input v-model="keySearch" type="text" class="form-control" />
      </div>
      <b-button variant="primary" class="col-sm-1" @click="onSearch"
        ><i class="fas fa-search text-white"></i
      ></b-button>
    </div>
    <Skeleton :loading="isLoading" />
    <b-alert
      v-model="showAlert"
      class="mt-2"
      dismissible
      :variant="variantAlert"
      >{{ alertMessage }}</b-alert
    >
    <div v-if="dataSet !== null">
      <div v-if="dataSet.data !== null">
        <div class="form-group row align-items-center">
          <label class="col-sm-3 col-form-label">Id </label>
          <div class="col-sm-8">
            {{ dataSet.data.id }}
          </div>
        </div>
        <div class="form-group row align-items-center">
          <label class="col-sm-3 col-form-label">Area </label>
          <div class="col-sm-8">
            {{ dataSet.origin }}
          </div>
        </div>
        <div
          v-if="dataSet.origin !== 'Provinsi'"
          class="form-group row align-items-center"
        >
          <label class="col-sm-3 col-form-label">
            {{
              dataSet.origin === 'Kecamatan'
                ? 'Kota Id'
                : dataSet.origin === 'Kelurahan'
                ? 'Kecamatan Id'
                : 'Provinsi Id'
            }}
          </label>
          <div class="col-sm-8">
            {{
              dataSet.origin === 'Kecamatan'
                ? dataSet.data.kota_id
                : dataSet.origin === 'Kelurahan'
                ? dataSet.data.kecamatan_id
                : dataSet.data.provinsi_id
            }}
          </div>
        </div>
        <div class="form-group row align-items-center">
          <label class="col-sm-3 col-form-label">Nama </label>
          <div class="col-sm-8">
            {{ dataSet.data.nama }}
          </div>
        </div>
      </div>
      <div v-else class="text-primary d-flex justify-content-center">
        There's no Data
      </div>
    </div>
    <div class="mt-2">
      <h2>{{ getCondition }}</h2>
      <h3>{{ form.age }}</h3>
    </div>
    <b-button variant="primary" @click="setStore"> SET STORE </b-button>
    <b-button variant="info" @click="getStore"> GET STORE </b-button>
  </div>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'
import { KasirPintarService } from '../../services/kasir.service.js'
export default {
  components: {
    Skeleton,
  },
  data() {
    return {
      keySearch: null,
      dataSet: null,
      isLoading: false,
      variantAlert: 'success',
      showAlert: false,
      alertMessage: null,
      dataCodition: 3,
      form: {
        age: 20,
      },
    }
  },
  computed: {
    getCondition() {
      return this.dataCodition < 5 ? 'I Love Anna' : 'Anna Love Me'
    },
  },
  watch: {
    'form.age'(newVal) {
      if (newVal > 25) alert('Hallo World')
    },
  },
  methods: {
    async onSearch() {
      this.isLoading = true
      this.showAlert = false
      try {
        const res = await KasirPintarService.fetchDetailById({
          id: this.keySearch,
        })
        if (res) {
          this.dataSet = res.data
        }
      } catch (error) {
        if (error.response.data) {
          this.alertMessage = error.response.data
          this.variantAlert = 'danger'
          this.showAlert = true
        }
      } finally {
        this.isLoading = false
      }
    },
    setStore() {
      this.dataCodition++
      this.form.age++
      this.$store.dispatch('user/setLearning', {
        learning: {
          title: 'Spiderman 4',
          years: 2004,
        },
      })
    },
    getStore() {
      this.dataCodition--
      this.form.age--
      console.debug(this.$store.state.user.learning)
    },
  },
}
</script>

<style lang="scss" scoped></style>
