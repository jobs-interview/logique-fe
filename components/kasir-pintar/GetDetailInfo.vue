<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Option </label>
      <div class="col-sm-6">
        <select v-model="selectedOption" class="custom-select">
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="form-group row align-items-center">
      <label class="col-sm-2 col-form-label">Id </label>
      <div class="col-sm-5">
        <input v-model="keySearch" type="text" class="form-control" />
      </div>
      <b-button variant="primary" class="col-sm-1" @click="onSearch"
        ><i class="fas fa-search text-white"></i
      ></b-button>
    </div>
    <Skeleton :loading="isLoading" />
    <b-table
      :items="dataSet"
      :fields="fields"
      responsive="sm"
      :per-page="perPage"
      :current-page="currentPage"
      show-empty
    >
    </b-table>
    <div class="d-flex justify-content-end mt-2">
      <b-pagination
        v-model="currentPage"
        class="pagination-rounded"
        :total-rows="totalData"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
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
      options: ['Kota Id', 'Kecamatan Id', 'Provinsi Id'],
      selectedOption: 'Kota Id',
      isLoading: false,
      keySearch: null,
      perPage: 10,
      currentPage: 1,
      totalData: 0,
      fields: [
        {
          key: 'id',
          label: 'ID',
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          key: 'nama',
          label: 'Nama',
          thClass: 'text-center',
          tdClass: 'text-left',
        },
      ],
    }
  },
  methods: {
    async onSearch() {
      this.isLoading = true
      this.showAlert = false
      this.currentPage = 1
      try {
        const res = await KasirPintarService.fetchDetailBySubId(
          {
            id: this.keySearch,
          },
          {
            type:
              this.selectedOption === 'Kota Id'
                ? 'kecamatan'
                : this.selectedOption === 'Kecamatan Id'
                ? 'kelurahan'
                : 'kota',
          }
        )
        if (res) {
          this.dataSet = res.data
          this.totalData = res.data.length
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
  },
}
</script>

<style lang="scss" scoped></style>
