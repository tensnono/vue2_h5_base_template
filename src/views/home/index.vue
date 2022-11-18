<template>
  <div>
    <h2>home template</h2>
    <HelloWorld />
    <div>父组件mixin: {{ msg1 }}</div>
    <van-button  type="warning" @click="saveMsg('new mixin data~')">parent btn save msg</van-button>

    <van-button type="primary" @click="jump('member')">push member</van-button>

    <van-button type="danger" @click="testFunc()">prototype testFunc</van-button>
  </div>
</template>

<script>

import { getUserInfo, getUserInfo0, getUserInfo1, getUserInfo2 } from '@/api/user.js' 
import HelloWorld from '../../components/HelloWorld.vue'


export default {
  components: {
    HelloWorld
  },

  created(){
    console.log('testProperty', this.testProperty)
    this.getData()
    this.getData0()
    this.getData1()
    this.getData2()
  },

  methods:{
    getData(){
      let param = { userid: '1000001', address: '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'   } 
      getUserInfo( param ).then(res=>{

      })
    },
    
    getData0(){
      let param = { userid: '1000002', address: '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'  } 
      getUserInfo0( param )
    },
    
    getData1(){
      let param = {  userid: '1000003', address: '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'  } 
      getUserInfo1( param ) 
    },
    
    getData2(){
      let fdata = new FormData();
      fdata.append('userid', '10004')
      fdata.append('address', '0x0F836a0fde58BEE81b1fd97A5A732400364d7598')
      getUserInfo2( fdata ) 
    },
  },
}
</script>
