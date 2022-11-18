
export const mixin = {
  data(){
    return {
      testMix: '单独引用mixin'
    }
  },
  created(){
    console.log('这是混入对象的created1')
  },
  methods:{
    mixinsFun(){
      console.log('调用混入对象的methods的函数')
    }
  },
  computed:{
    testMix2(){
      return this.testMix+'：这是混入对象计算结果。'
    }
  },
  watch: {
    testMix(newVal,oldVal){
      console.log('混入对象的watch',newVal,oldVal)
    }
  }
}

