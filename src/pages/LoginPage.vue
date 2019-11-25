<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-16 11:09:26
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\pages\Index.vue
 -->
<template>
  <div class="box">
      <Login></Login>
  </div>
</template>

<script>
import Login from '@/components/Login';

export default {
  name:'LoginPage',
  data () {
    return {
    }
  },
  components:{
    Login
  }
}
</script>

<style scoped>
.box{
  width:100%;
}


</style>
