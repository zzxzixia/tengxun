<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-11 16:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\pages\Index.vue
 -->
<template>
  <div class="box">
        <Collection></Collection>
        <!-- <Back></Back> -->
  </div>
</template>

<script>
import Collection from '@/components/Collection';
// import Back from '@/components/Back';
export default {
  name: 'CollectionPage',
  data () {
    return {
      
    }
  },
  components:{
    Collection
  }
}
</script>

<style scoped>
.box{
  width:100%;
}


</style>
