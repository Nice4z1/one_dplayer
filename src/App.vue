<template>
  <div class="mx-auto max-w-3xl">
    <Head></Head>
    <div class="bg-white p-3 shadow-md">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'

export default {
  components: { Head, Footer },
  created() {
    console.log(ELEMENT)
  }
}
</script>

<style lang="less" scoped></style>
