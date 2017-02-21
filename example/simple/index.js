/**
 * @author rubyisapm
 */
import Vue from 'vue';
import AutoComplete from '../../index.js';
Vue.component(AutoComplete.name,AutoComplete);

var list=[
    {
        Id:1,
        Name:'one'
    },
    {
        Id:2,
        Name:'two'
    },
    {
        Id:3,
        Name:'three'
    }
];
var a=new Vue({
    el:'#app',
    data:{
        list:list,
        keys:['Id','Name'],
        matchKeys:['Id','Name'],
        showKeys:['Id','Name'],
        allForEmpty:true,
        value:{Id:1},
        placeholder:'请选择游戏'
    },
    methods:{
        select:function(item){
            this.value=item;
        },
        getValue:function(){
            console.log(this.$refs.autoC.getValue());
        }
    }
});

//setTimeout(function(){
//    a.list=list;
//},3000);
