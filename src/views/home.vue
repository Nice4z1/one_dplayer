<template>
  <div>
    <div class="mt-2 mb-2">
      <Tips :title="tips.title" :content="tips.content"></Tips>
      <!-- 播放器 -->
      <div v-if="$store.state.radio == 2 || $store.state.radio == 1" class="rounded-md shadow-lg h-52 sm:h-72 lg:h-80" id="dp"></div>
      <iframe v-if="$store.state.radio == 3" class="rounded-md shadow-lg h-52 sm:h-72 lg:h-80 w-full" :src="iframe"></iframe>
      <!-- 播放器 -->
    </div>
    <div class="mt-4 p-1">
      <el-alert v-if="$store.state.radio == 2" title="*您已开启JSON模式，可输入分享链接解析" type="info" show-icon></el-alert>
      <el-alert v-if="$store.state.radio == 3" title="*您已开启iFrame模式，可输入分享链接解析" type="info" show-icon></el-alert>
      <el-alert v-if="$store.state.radio == 1" title="*当前是默认模式，输入m3u8文件链接即可解析" type="info" show-icon></el-alert>
      <input class="mt-3 mb-3 w-full py-1 px-4 border-2 border-pink-400 rounded" placeholder="填入需要解析(播放)的地址" type="text" v-model.trim="url" />
      <button class="mt-2 rounded bg-indigo-600 px-3 py-1 text-white shadow-md hover:bg-indigo-500 active:bg-pink-500" @click="star">播放/解析</button>
    </div>
  </div>
</template>

<script>
import Tips from '@/components/Tips.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  components: { Tips },
  data() {
    return {
      iframe: '',
      router: '',
      tips: {
        title: '首页',
        content:
          '<p>👋非常注重你的隐私🔏</p><p>🙅不会对你进行隐私数据收集🔏</p><p>🎉原生支持解析格式：M3U8/FLV/MP4</p><p>🎉<span class="text-pink-400 font-bold">扩展支持：</span> 腾讯/爱奇艺/优酷/搜狐/芒果等(右上角自行设置) </p><p class="text-pink-400 font-bold">*如果解析接口跳广告请立即更换接口！ </p>'
      },
      url: ''
    }
  },
  created() {
    this.uprouters()
  },
  mounted() {
    this.star()
  },
  methods: {
    ...mapMutations(['uprouter']),
    uprouters() {
      this.uprouter('/khome')
    },
    //判断有没有开启JSON模式
    star() {
      const radio = this.$store.state.radio
      if (radio == '1') {
        const url = this.$store.state.url
        this.url = url
        //如果没有
        this.dplayer(url)
      } else if (radio == '2') {
        this.url = 'https://www.iqiyi.com/v_1ppw3j3bmvc.html?vfrm=pcw_home&vfrmblk=B&vfrmrst=fcs_0_v11'
        const url = this.url
        this.getUrl(url)
        // 如果有那就axios拿链接
      } else if (radio == '3') {
        //得到解析地址
        if (this.url == '') {
          this.url = 'https://www.iqiyi.com/v_1ppw3j3bmvc.html?vfrm=pcw_home&vfrmblk=B&vfrmrst=fcs_0_v11'
        }
        const url = this.url
        //得到解析
        const jx = this.$store.state.jx
        this.iframe = jx + url
        console.log(this.iframe)
      }
    },
    async getUrl(url) {
      const { data: res } = await axios.get(`${this.$store.state.jx}${url}`)
      const source = res.url
      this.dplayer(source)
    },
    dplayer(url) {
      //拿到链接后去掉空格
      let data = url.replace(/\s/g, '')
      let dp = new DPlayer({
        container: document.getElementById('dp'),
        theme: '#3F51B5',
        video: {
          url: data,
          type: 'auto'
        },
        autoplay: true
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
