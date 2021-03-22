<template>
  <div class="category-sub">
    <category-sub-item></category-sub-item>
  </div>
</template>

<script>
import CategorySubItem from './CategorySubItem'

export default {
  components: {
    CategorySubItem
  },
  props: {
    showSubcategory:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  created () {
    console.log(this.showSubcategory)
  }
}
</script>

<style>
  .category-sub{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style> 