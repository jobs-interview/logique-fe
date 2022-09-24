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
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // middleware: 'logged-in',
  mounted() {
    document.body.classList.add('auth-fluid-pages')
  },
}
</script>
<style scoped>
.playfair {
  font-family: 'Playfair-Display';
}
</style>
