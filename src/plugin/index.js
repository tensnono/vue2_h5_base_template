
import mixins from './mixin'

export default{
  install(Vue){
    // 定义全局指令
    // Vue.directive('fbind', function (el, binding) {
        
    // });

    // 定义混入
    Vue.mixin(mixins);


    //操作原型对象
    Vue.prototype.testProperty='原型对象上的属性';
    Vue.prototype.testFunc = ()=>{
      alert("原型对象上的方法");
    }
  }
}

