/*
 * @Author: 潘金红
 * @Date: 2019-11-06 19:44:45
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 17:25:08
 * @Description: 
 */
import Vue from 'vue';
import VueX from 'vueX';

Vue.use(VueX);

let store=new VueX.Store({
    state:{
        isColor:[
            true,
            false,
            false,
            false
        ],
        navColor:[
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ],
        navData:[]
    },
    mutations:{
        getIsColor(state,index){
            state.isColor.forEach((item,index,arr)=>{
                arr[index]=false;
            })
            state.isColor[index]=true;
        },
        // getData(state,data){
        //     state.navData=data;
        // },
        // getNav(state){
        //     for(let i=0;i<state.navData.length-1;i++){
        //         state.navColor.push(false);
        //     }
        //     console.log("getNav"+state.navColor);
        // },
        getIsNav(state,index){
            state.navColor.forEach((item,index,arr)=>{
                arr[index]=false;
            });
            state.navColor[index]=true;
        }
    },
    // actions:{
    //     getData(context){
    //         fetch("http://10.35.161.6:3000/nav")
    //         .then(res=>{
    //             return res.json();
    //         })
    //         .then(data=>{
    //             context.commit("getData",data);
    //         })
    //         .catch(err=>{
    //             console.log(err);
    //         })
    //     }
    // }
})
export default store;
