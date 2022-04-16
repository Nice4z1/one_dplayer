<template>
  <div>
    <Tips :title="tips.title" :content="tips.content"></Tips>
    <div class="mt-3">
      <div class="p-2 text-gray-500 shadow">
        <div class="text-xl">
          当前模式： <span class="text-pink-500 font-bold">{{ $store.state.msg }} 🎺</span>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <Dtool></Dtool>
    </div>
  </div>
</template>

<script>
import Tips from '@/components/Tips.vue'
import { mapMutations } from 'vuex'
import Dtool from '@/components/Dtool.vue'
export default {
  components: { Tips, Dtool },
  data() {
    return {
      router: '',
      tips: {
        title: '扩展',
        content: '<p>👋当前版本：1.0.1 😄</p><p>💽当前设置数据会在保存后存在你的浏览器中</p><p>🎉<span class="text-pink-400 font-bold">扩展支持：</span> 已开放2种模式</p> <p class="text-pink-400 font-bold">*如果解析接口跳广告请立即更换接口！ </p>'
      }
    }
  },
  created() {
    this.uprouters()
  },
  methods: {
    ...mapMutations(['uprouter']),
    uprouters() {
      this.uprouter('/')
    }
  }
}
</script>

<style lang="less" scoped></style>
