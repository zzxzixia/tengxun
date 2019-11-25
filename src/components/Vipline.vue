<!--
 * @Author: your name
 * @Date: 2019-11-12 19:12:43
 * @LastEditTime: 2019-11-16 12:46:08
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \shopapp\src\pages\VipPage.vue
 -->
<template>
<div class="box">
    <div class="hot">
        <div class="hotImg" v-for="(item,index) in vipactions" :key="index">
            <a v-bind:href="item.href"><img :src="item.src" ></a>
            <div class="hotSpan">
                <p>{{item.text2}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Vipline',
  data () {
    return {
        vipactions:{}
    }
  },
  created() {   
     axios.get('http://10.35.161.6:3000/viplines')
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
}

.hot{
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: space-between;
}  
.hotSpan{
    height:.4rem;
    width:1.3rem;
    float:left;
    padding-top: .1rem;
}
.hotSpan p{
    font-size:14px;
    color:#393939;
}
.hotImg{
    margin-right:.06rem;
}
.hotImg img{
    width: 1.3rem;
    height: 1.7rem;
    float:left;
    border-radius: 5%;
}
</style>