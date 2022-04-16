<template>
  <div>
    <div class="p-2 text-gray-500 shadow">
      <el-alert title="开启你喜欢的模式" type="info" show-icon></el-alert>

      <div class="text-lg">选择你喜欢的：</div>
      <div class="pt-1">
        <el-radio v-model="$store.state.radio" label="1" border @change="ChangeMode" size="small">默认模式</el-radio>
        <el-radio v-model="$store.state.radio" label="2" border @change="ChangeMode" size="small">JSON模式</el-radio>
        <el-radio v-model="$store.state.radio" label="3" border @change="ChangeMode" size="small">iFrame模式🆕</el-radio>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      radio: '1',

      radi2: '选中且禁用'
    }
  },

  created() {
    console.log('About created', this.$data, this.$el)
    this.router()
  },

  methods: {
    ...mapMutations(['upradio', 'upjx', 'upmsg']),
    router() {
      // 控制台页面创建完毕后，开始根据设置来跳转页面
      const radio = this.$store.state.radio
      if (radio == '1') {
        return
      } else if (radio == '2') {
        this.$router.push('/khome/json')
        return
      } else if (radio == '3') {
        this.$router.push('/khome/iframe')
        return
      }
    },
    ChangeMode() {
      //读取存在vuex中的数据
      const radio = this.$store.state.radio
      //如果是默认模式
      if (radio == '1') {
        this.$router.push('/khome')
        this.upradio('1')
        this.upmsg('默认模式')
        this.$notify({
          title: '成功切换默认模式',
          type: 'success'
        })
      } else if (radio == '2') {
        //如果是JSON模式则跳到json页面维护
        this.$router.push('/khome/json')
      } else if (radio == '3') {
        // 如果是iframe模式则跳到 iframe
        this.$router.push('/khome/iframe')
      }
    }
  }
}
</script>
<style scoped>
.el-radio {
  margin-left: 0px !important;
  margin-right: 8px !important;
}
</style>
