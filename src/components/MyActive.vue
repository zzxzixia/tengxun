<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-13 17:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<div class="active">
    <h3>其他</h3>
    <p><i class="el-icon-key"></i><span>个人信息</span><span class="activeBox">填写信息享优惠</span></p>
    <p><i class="el-icon-share"></i><span>意见反馈</span></p>
</div>
</template>

<script>

export default {
  name: 'MyActive',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.active{
    width:90%;
    margin: 0px auto;
}
.active p{
    height:.7rem;
    line-height:.7rem;
}
h3{
    color:#000000;
    font-size:16px;
    margin: .1rem auto;
}
i{
    font-size:18px;
    margin-left:.1rem;
}
.active p span{
    height:.7rem;
    font-size:15px;
    color:#000000;
    float:left;
}
.active .activeBox{
    font-size:15px;
    color:#848494;
    float:right;
}
</style>
