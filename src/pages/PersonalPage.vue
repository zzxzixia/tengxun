<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-20 17:13:29
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\pages\Index.vue
 -->
<template>
  <div class="box">
        <MyNav></MyNav>
        <MyVip></MyVip>
        <MySection></MySection>
        <MyActive></MyActive>
        <Footer></Footer>
  </div>
</template>

<script>
import MyNav from '@/components/MyNav';
import MyVip from '@/components/MyVip';
import MySection from '@/components/MySection';
import MyActive from '@/components/MyActive';
import Footer from '@/components/Footer';
// import MyFooter from '@/components/MyFooter';

export default {
  name: 'MyCenterPage',
  data () {
    return {
      
    }
  },
  components:{
     MyNav,MyVip,MySection,MyActive,Footer
  },
  created(){
      this.$store.commit("getIsColor",3);
  }
}
</script>

<style scoped>
.box{
  width:100%;
}


</style>
