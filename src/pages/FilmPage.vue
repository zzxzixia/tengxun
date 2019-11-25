<!--
 * @Author: 潘金红
 * @Date: 2019-11-13 17:17:51
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 21:56:06
 * @Description: 
 -->
<style scoped>
            
</style>
<template>
    <div class="box">
        <IndexNav></IndexNav>
        <TvSearch title="新西行漫记" title1="院线" title2="免费" type="电影"></TvSearch>
        <Banner></Banner>
        <Cainihuizhui keywords="精挑好货，不可错过" iconname="icon-qianjin6" typeNa="sel_index"></Cainihuizhui>
        <Tuijian tuijianTitle="重磅热播" iconname="icon-mengbanhangkonghangtian-xingxingstar"></Tuijian>
        <TuijianBanner  tuiBannerTitle="首播影院" iconname="icon-mengbanhangkonghangtian-xingxingstar" filmtype="dongman"></TuijianBanner>
        <TuijianBanner tuiBannerTitle="自制电影 独家放送" iconname="icon-xuehua2" filmtype="dongman"></TuijianBanner>
        <TuijianBanner tuiBannerTitle="超燃大片" iconname="icon-qianjin4" filmtype="dongman"></TuijianBanner>
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
    name:"FilmPage",
    data() {
        return {
        }
    },
    components:{
        IndexNav,Banner,TvSearch,Footer,Cainihuizhui,Tuijian,TuijianBanner
    }
}
</script>

