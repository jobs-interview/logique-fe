<template>
  <div>
    <b-row class="d-flex justify-content-center">
      <b-col md="3">
        <div class="d-flex">
          <b-input
            v-model="searchKey"
            @keydown.enter.native="searchMusic"
          ></b-input>
          <b-button variant="primary" @click="searchMusic"
            ><i class="fe-search"></i
          ></b-button>
        </div>
        <Skeleton :loading="isLoading" />
        <div
          v-if="isDiplayed && !isLoading"
          class="body-strong text-center mt-2 text-black"
        >
          Search Result For : {{ keyDisplayed }}
        </div>
        <div v-if="isNoData" class="body-strong text-center mt-2 text-black">
          No Data
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col
        v-for="(music, index) in dataSet.results"
        :key="index"
        sd="6"
        md="6"
        lg="4"
        xl="3"
      >
        <b-card>
          <b-card-text>
            <div class="d-flex">
              <img :src="music.artworkUrl100" alt="" srcset="" />
              <div class="ml-2" style="width: 100%">
                <div class="text-secondary">
                  {{ music.artistName }}
                </div>
                <div class="body-strong">
                  {{ music.collectionName }}
                </div>
                <div
                  class="mt-2 d-flex justify-content-between align-items-center"
                  style="box-sizing: border-box"
                >
                  <b-button variant="success">Play</b-button>
                  <div class="body-strong text-warning">
                    $
                    {{ music.collectionPrice }}
                  </div>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'
import { LoqigueService } from '../../services/loqigue.service.js'
export default {
  components: {
    Skeleton,
  },
  data() {
    return {
      dataSet: [],
      searchKey: null,
      isDiplayed: false,
      keyDisplayed: null,
      isLoading: false,
      isNoData: false,
    }
  },
  async mounted() {},
  methods: {
    async searchMusic() {
      try {
        this.isLoading = true
        const response = await LoqigueService.fetchSearchByParam({
          term: this.searchKey,
        })
        this.dataSet = response.data
        this.isNoData = response.data.results.length === 0
        this.isDiplayed = true
        this.keyDisplayed = this.searchKey
        this.isLoading = false
      } catch (error) {
        console.debug(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
