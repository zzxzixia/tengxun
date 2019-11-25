<!--
 * @Author: 潘金红
 * @Date: 2019-11-13 17:17:51
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 21:56:25
 * @Description: 
 -->
<style scoped>
            
</style>
<template>
    <div class="box">
        <IndexNav></IndexNav>
        <TvSearch title="斗破苍穹" title1="偶像" title2="都市" type="电视剧"></TvSearch>
        <Banner></Banner>
        <Cainihuizhui keywords="猜你会追" iconname="icon-qianjin6" typeNa="sel_index"></Cainihuizhui>
        <Tuijian tuijianTitle="热剧精选" iconname="icon-mengbanhangkonghangtian-xingxingstar"></Tuijian>
        <TuijianBanner  tuiBannerTitle="热剧追追追，听我的，来看!" iconname="icon-mengbanhangkonghangtian-xingxingstar" filmtype="dongman"></TuijianBanner>
        <TuijianBanner tuiBannerTitle="美剧和冬天更配哦" iconname="icon-xuehua2" filmtype="dongman"></TuijianBanner>
        <TuijianBanner tuiBannerTitle="剧荒？不存在的！来这里看看" iconname="icon-handoup" filmtype="dongman"></TuijianBanner>
        <Footer></Footer>
    </div>
</template>
<script>
import IndexNav from "../components/IndexNav"
import Banner from "../components/Banner"
import TvSearch from "../components/TvSearch"
import Footer from "../components/Footer"
import Cainihuizhui from "../components/Cainihuizhui"
import Tuijian from "../components/Tuijian"
import TuijianBanner from "../components/TuijianBanner"
export default {
    name:"TvPage",
    data() {
        return {
        }
    },
    components:{
        IndexNav,Banner,TvSearch,Footer,Cainihuizhui,Tuijian,TuijianBanner
    }
}
</script>
