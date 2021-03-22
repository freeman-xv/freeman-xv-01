<template>
    <scroll :probe-type="3" :pull-up-load="true" class="button-scroll">
      <ul>
        <li v-for="(item,index) in BottonList" :key="index" @click="gategoryClick(index)" :class="{active:index===currentIndex}">{{item.title}}</li>
      </ul>
    </scroll>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'

export default {
  data () {
    return {
      currentIndex:0  
    }
  },
  components: { 
    Scroll 
  },
  props: {
    BottonList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    gategoryClick(index){
      this.currentIndex = index
      this.$emit('selectItem',index)
    },
  }
}
</script>

<style scoped>
  .button-scroll{
    height: calc(100%-93px);
    overflow: hidden;
  }

  li{
    box-sizing: border-box;
    padding: 11px;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    font-weight: 700;
  }

  .active{
    border-left: 2px ;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
  }
</style>