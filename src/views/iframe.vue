<template>
  <div class="p-2 mt-2 text-gray-500 shadow">
    <el-alert title="iFrame是最常用的接口" type="info" show-icon></el-alert>
    <div class="text-lg font-bold">iFrame模式🚀</div>
    <div class="mt-1 mb-1">
      🥰 iFrame通用接口：
      <input v-model="jx" placeholder="https://json.pangujiexi.com:12345/json.php?url=" class="border-2 border-indigo-500 rounded" type="text" />
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
      jx: 'https://jx.m3u8.pw/?url='
    }
  },
  created() {
    this.iniStart()
  },
  methods: {
    ...mapMutations(['upradio', 'upjx', 'upmsg']),
    iniStart() {
      this.upradio('3')
      this.upjx(this.jx)
      this.upmsg('iFrame模式')
      this.$notify({
        title: '成功切换iFrame模式',
        type: 'success'
      })
    },
    SaveReturn() {
      this.upradio('3')
      this.upjx(this.jx)
      this.upmsg('iFrame模式')
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
