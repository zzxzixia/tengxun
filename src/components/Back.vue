<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:22
 * @LastEditTime: 2019-11-11 16:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\Back.vue
 -->

<template>
    <div class="box">
        <i class="el-icon-arrow-left" @click="back()"></i>
</template>
<script>
export default {
  name: 'Back',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>

.box{
    width: 95%;
    margin: 0 auto;
    height: .3rem;
}

img{
    width:.25rem;
    height: .25rem;    
}

</style>
