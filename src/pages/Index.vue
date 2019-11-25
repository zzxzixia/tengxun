<!--
 * @Author: 潘金红
 * @Date: 2019-11-06 20:02:28
 * @LastEditTime: 2019-11-16 09:04:28
 * @LastEditors: 潘金红
 * @Description: "Index"
 * @FilePath: \minef:\myvue\practisevue\src\pages\Index.vue
 -->
<template>
<div class="indexBox">
    <IndexNav></IndexNav>
    <Search tip="请输入你想搜索的内容"></Search>
    <Banner class="banner"></Banner>
    <Cainihuizhui keywords="猜你会追" iconname="icon-qianjin6" typeNa="sel_index"></Cainihuizhui>
    <Tuijian tuijianTitle="精选大片" iconname="icon-dianshiju"></Tuijian>
    <TuijianBanner tuiBannerTitle="动漫推荐" iconname="icon-qianjin6" filmtype="dongman"></TuijianBanner>
    <TuijianBanner tuiBannerTitle="热门综艺" iconname="icon-redian" filmtype="redianZY"></TuijianBanner>
    <RedianSP redianTitle="热点视频" iconname="icon-redian" class="footerup"></RedianSP>
    <TuijianBanner tuiBannerTitle="电影大片" iconname="icon-dianying" filmtype="redianZY"></TuijianBanner>
    <Footer isShouYe="isColor"></Footer>
</div>
</template>
<script>
import Search from "../components/Search";
import Banner from "../components/Banner";
import IndexNav from "../components/IndexNav";
import Cainihuizhui from "../components/Cainihuizhui";
import Tuijian from "../components/Tuijian";
import TuijianBanner from "../components/TuijianBanner";
import RedianSP from "../components/RedianSP";
import Footer from "../components/Footer";

export default {
    name:"Index",
    data(){
        return{
        
        }
    },
    components:{
        Search,Banner,IndexNav,Cainihuizhui,Tuijian,TuijianBanner,RedianSP,Footer
    },
    created(){
        this.$store.commit("getIsColor",0);
    }
}
</script>
<style>
.indexBox{
    width:100%;
}
</style>