<template>
  <div id="detail" name="Detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
    <detail-botton-bar @addToCart="addToCart" class="botton-bar"></detail-botton-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetaulCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottonBar from './childComps/DetailBottonBar'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail"
import {debounce} from 'common/utils'
export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop:false
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottonBar,
    BackTop
  },
  created(){
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      // 1.获取顶部的图片轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo)

      // 4.获取商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 6.取出评论的信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }

      // 7.给getThemeTopY赋值
      this.getThemeTopY = debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      })
      // this.$nextTick(()=>{
      //   // 根据最新的数据，对应的DOM是已经被渲染出来
      //   // 但是图片依然是没有加载完（目前获取到offsetTop不包含其中的图片的）
      //   this.themeTopYs = []
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // })
    })

    // 3.请求推荐数据
    getRecommend().then(res=>{
      this.recommends = res.data.list
    })
  },
  updated(){

  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      // this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+44,200)
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
      // 1.获取Y值
      const positionY = -position.y

      // 2.positionY与主题中值进行对比
      for(let i=0;i<this.themeTopYs.length;i++){
        if(this.currentIndex !== i && ((i<this.themeTopYs.length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===this.themeTopYs.length-1 && positionY >= this.themeTopYs[i]))){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      this.isShowBackTop = -position.y > 1000?true:false
    },
    addToCart(){
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 2.将商品添加到购物车里
      this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart', product)

      // 3.添加到购物车成功
      
    }
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 3;
    background-color: #fff;
    height: 100vh;
    margin-top: 44px;
    margin-bottom: 49px;
  }

  .detail-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 93px);
  }

  .botton-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>