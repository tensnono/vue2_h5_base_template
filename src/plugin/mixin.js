
//  minxin.js
export const mixin = {
  data() {
    return{
      msg1: 'default msg1',
      msg2: '我是混入内容2'
    }
  },

  methods:{
    saveMsg(value){
      this.msg1 = value
    },
    jump(path){
      this.$router.push(`/${path}`)
    },
  },
}

export default mixin;
