<template>
  <div class="p-2 mt-2 text-gray-500 shadow">
    <el-alert title="如果您没有JSON接口，您可以留空(确保允许跨域哦)" type="info" show-icon></el-alert>
    <div class="text-lg font-bold">JSON模式🚀</div>
    <div class="mt-1 mb-1">
      🥰 JSON解析接口：
      <input v-model="jx" :placeholder="$store.state.jx" class="border-2 border-indigo-500 rounded" type="text" />
    </div>
    <div class="mt-1 mb-1">
      🚽 影片搜索：
      <el-radio disabled label="禁用">待开放</el-radio>
    </div>
    <div class="mt-3 mb-1">
      <button @click="SaveReturn" class="w-full bg-indigo-600 py-1 rounded shadow text-white text-lg font-bold">保存并返回 🎬</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      jx: ''
    }
  },
  mounted() {
    this.iniStart()
  },
  methods: {
    ...mapMutations(['upradio', 'upjx', 'upmsg']),
    iniStart() {
      this.jx = this.$store.state.jx
      this.upradio('2')
      this.upjx(this.jx)
      this.upmsg('JSON模式')
      this.$notify({
        title: '成功切换JSON模式',
        type: 'success'
      })
    },
    SaveReturn() {
      this.upradio('2')
      this.upjx(this.jx)
      this.upmsg('JSON模式')
      this.$router.push('/')
      this.$notify({
        title: '保存成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
