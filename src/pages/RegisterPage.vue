<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-12 20:31:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\pages\Index.vue
 -->
<template>
  <div class="box">
      <Register></Register>
  </div>
</template>

<script>
import Register from '@/components/Register';

export default {
  name: 'RegisterPage',
  data () {
    return {
    }
  },
  components:{
    Register
  }
}
</script>

<style scoped>
.box{
  width:100%;
}


</style>
