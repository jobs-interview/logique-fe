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

    <Skeleton :loading="isLoading" class="mt-2" />

    <b-row class="mt-2">
      <b-col
        v-for="(music, index) in dataSet"
        :key="index"
        sd="6"
        md="6"
        lg="4"
      >
        <b-card>
          <b-card-text>
            <!-- <div class="d-flex"> -->
            <b-row>
              <b-col lg="6">
                <Skeleton :loading="isLoading" />
                <div v-if="!isLoading" style="position: relative">
                  <img
                    :src="music.artworkUrl100"
                    alt=""
                    srcset=""
                    style="width: 100%; top: 50%; left: 50%"
                  />
                  <b-button
                    class="bg-secondary rounded-circle px-2"
                    style="
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      border: 2px solid white;
                    "
                    @click="togglePlay(music)"
                  >
                    <i
                      :class="[
                        !music.isPlayed ? `fe-play` : `fe-pause`,
                        'text-white',
                      ]"
                    ></i>
                  </b-button>
                </div>
              </b-col>
              <b-col>
                <div style="width: 100%">
                  <Skeleton :loading="isLoading" />
                  <div v-if="!isLoading" class="text-secondary">
                    {{ music.artistName }}
                  </div>
                  <Skeleton :loading="isLoading" />
                  <div v-if="!isLoading" class="body-strong">
                    {{ music.collectionName }}
                  </div>
                  <Skeleton :loading="isLoading" class="mt-2" />
                  <div
                    v-if="!isLoading"
                    class="mt-2 d-flex justify-content-between align-items-center"
                    style="box-sizing: border-box"
                  >
                    <b-button variant="success">{{
                      music.primaryGenreName
                    }}</b-button>
                    <div class="body-strong text-warning">
                      $
                      {{ music.collectionPrice }}
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <!-- </div> -->
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
  methods: {
    async searchMusic() {
      try {
        this.isLoading = true

        this.dataSet.forEach((data) => {
          data.previewUrl.pause()
          data.previewUrl.currentTime = 0
        })

        const response = await LoqigueService.fetchSearchByParam({
          term: this.searchKey,
        })
        this.dataSet = response.data.results.map((data) => ({
          ...data,
          isPlayed: false,
          previewUrl: new Audio(data.previewUrl),
        }))

        this.isNoData = response.data.results.length === 0
        this.isDiplayed = true
        this.keyDisplayed = this.searchKey
        this.isLoading = false
      } catch (error) {
        console.debug(error)
      }
    },

    togglePlay(music) {
      if (music.isPlayed) {
        music.previewUrl.pause()
        music.previewUrl.currentTime = 0
      } else music.previewUrl.play()
      music.isPlayed = !music.isPlayed
    },
  },
}
</script>

<style lang="scss" scoped></style>
