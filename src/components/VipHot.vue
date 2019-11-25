<!--
 * @Author: your name
 * @Date: 2019-11-12 19:12:43
 * @LastEditTime: 2019-11-16 12:45:42
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \shopapp\src\pages\VipPage.vue
 -->
<template>
<div class="box">
    <h3>正在热播</h3>
    <div class="hot">
        <div class="hotImg" v-for="(item,index) in vipactions" :key="index">
            <a v-bind:href="item.href"><img :src="item.src" ></a>
            <div class="hotSpan">
                <p>{{item.text1}}</p>
                <p>{{item.text2}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VipHot',
  data () {
    return {
        vipactions:{}
    }
  },
  created() {   
     axios.get('http://10.35.161.6:3000/viphots')
     .then(res=>{ 
         this.vipactions = res.data;
     })
     .catch(err=>{
         console.log(err);
     });
  }
}
</script>
<style scoped>
.box{
    width:95%;
    margin: 0px auto;
    margin-top:.5rem;
    height: 3.3rem;
}
h3{
    color:black;
    font-size:18px;
    margin:.1rem 0px;
}
.hot{
    display: flex;
    flex-wrap: wrap;
    height:2rem;
    justify-content: space-between;
}  
.hotSpan{
    height:.4rem;
    width:1.75rem;
    float:left;
    padding-top: .1rem;
}
.hotSpan p{
    font-size:14px;
    color:#393939;
}
.hotImg img{
    width: 1.75rem;
    height: 1rem;
    float:left;
    border-radius: 5%;
}
</style>