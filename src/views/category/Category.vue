<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <category-button :botton-list="BottonList" class="tab-botton" @selectItem="selectItem"></category-button>
      <scroll :probe-type="3" :pull-up-load="true" class="tab-scroll">
        <div>
          <category-sub :subcategorires="showSubcategory"></category-sub>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CategoryButton from './childComps/CategoryButton'
import Scroll from '../../components/common/scroll/Scroll'
import CategorySub from './childComps/CategorySub.vue'

import {getCategory,getSubcategory,getCategoryDetail} from "network/category"
import {POP,SELL,NEW} from "@/common/const"
import {tabControlMixin} from '@/common/mixin'

  export default {
    components: {
      NavBar,
      CategoryButton,
      Scroll,
      CategorySub,
      CategoryButton,

    },
    mixins: [tabControlMixin],
    data () {
    return {
      BottonList:[],
      currentIndex:-1,
      categoryData: {}
    }
  },
  created () {
    this.getCategory()
  },
  computed: {
    showSubcategory() {
		  if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
	    if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    getCategory(){
      getCategory().then(res=>{
        this.BottonList = res.data.category.list
        console.log(this.BottonList)
        for (let i = 0; i < this.BottonList.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
              }
            }
          }
        this.getSubcategories(0)
      })
    },
    getSubcategories(index){
      this.currentIndex = index;
		  const mailKey = this.BottonList[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this.getCategoryDetail(POP)
        this.getCategoryDetail(SELL)
        this.getCategoryDetail(NEW)
      })

    },
    getCategoryDetail(type) {
		  // 1.获取请求的miniWallkey
      const miniWallkey = this.BottonList[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
		  getCategoryDetail(miniWallkey, type).then(res => {
		  // 3.将获取的数据保存下来
		    this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
      console.log(this.categoryData)
    },
    selectItem(index) {
      this.getSubcategories(index)
    }
  }
}
</script>

<style scoped>
  .category{
    padding-top: 44px;
    height: 100vh;
  }

  .category-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    background-color: var(--color-tint);
    font-weight: 700;
  }

  .content{
    height: calc(100vh - 93px);
    display: flex;
  }

  .tab-scroll{
    flex: 5;
    height: 100%;
  }

  .tab-botton{
    flex: 2;
  }
</style>