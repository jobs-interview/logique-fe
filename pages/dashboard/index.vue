<template>
  <div>
    <div class="heading-1 text-primary">Welcome, {{ $auth.user.username }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$auth.user)
  },
}
</script>

<style lang="scss" scoped></style>
