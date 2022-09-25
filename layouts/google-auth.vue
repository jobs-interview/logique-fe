<template>
  <div>
    <!-- <div class="auth-fluid-right">
      <div class="auth-user-testimonial">
        <div class="large-heading-1 playfair">Kasir Pintar</div>
        <p class="lead font-weight-normal playfair">
          <i class="mdi mdi-format-quote-open"></i> Satu-satunya Aplikasi Kasir
          Pintar di Indonesia
          <i class="mdi mdi-format-quote-close"></i>
        </p>
      </div>
    </div> -->
    <!--Auth fluid left content -->
    <!-- <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body"> -->
    <Vertical
      v-if="layout.layoutType === 'vertical'"
      :layout="layout.layoutType"
    >
      <Nuxt />
    </Vertical>
  </div>
  <!-- </div>
    </div>
  </div> -->
</template>
<script>
import { mapState } from 'vuex'
import Vertical from './vertical'

export default {
  components: {
    Vertical,
  },
  // middleware: 'logged-in',
  computed: mapState(['layout']),
  mounted() {
    if (this.$route.query.layout) {
      this.$store.dispatch('layout/changeLayoutType', {
        layoutType: this.$route.query.layout,
      })
    }
    document.body.classList.add('auth-fluid-pages')
  },
  // mounted() {
  // },
}
</script>
<style scoped>
.playfair {
  font-family: 'Playfair-Display';
}
</style>
