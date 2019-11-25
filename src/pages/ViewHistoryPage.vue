<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-11 16:57:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\pages\Index.vue
 -->
<template>
  <div class="box">
        <HisTop></HisTop>
        <HisBottom></HisBottom>
  </div>
</template>

<script>
import HisTop from '@/components/HisTop';
import HisBottom from '@/components/HisBottom';
import { Loadmore } from 'mint-ui';
export default {
  name: 'ViewHistoryPage',
  data () {
    return {
      
    }
  },
  components:{
     HisTop,HisBottom
  }
}
</script>

<style scoped>
.box{
  width:100%;
}


</style>
