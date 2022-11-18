<template>
  <div class="hello">
    <div class="item">
      <div>子组件mixin：{{ msg1 }}</div>
      <van-button @click="saveMsg('new mixin data~')">child btn save msg</van-button>
    </div>
    
    <div class="item">
      <h3><span style="color: red;">system_global_settings:</span>{{ this.$settings.TokenKey }}</h3>
    </div>
    
    <div class="item">
      <h3><span style="color: red;">system_filters:</span>{{ this.$hideString('17501716104', 3, -4) }}</h3>
    </div>
    
    <div class="item">
      <h3><span style="color: red;">system_store:</span>{{ this.$store.state.userifo }}</h3>
    </div>

    <div class="postcss-box"> 测试post-css </div>
  </div>
</template>

<script>
import { mixin } from '../mixins';

export default {
  mixins: [mixin],
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.postcss-box {
  width: 260px;
  height: 100px;
  margin: 20px;
  font-size: 15px;
  background: skyblue;
}

button {
  background: skyblue;
  height: 30px;
}
h3 {
  margin: 0;
}
.item {
  margin: 20px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
