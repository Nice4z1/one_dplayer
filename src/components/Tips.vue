<template>
  <div>
    <div class="p-2 text-gray-500 shadow">
      <h1 class="">{{ title }}公告🪧:</h1>
      <div v-html="content"></div>
      <p>
        🚀当前是：<span class="text-pink-500 font-bold">{{ $store.state.msg }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '这是公告标题'
    },
    content: {
      type: String,
      default: '这是公告内容'
    }
  },
  created() {}
}
</script>

<style lang="less" scoped></style>
