<template>
  <div class="menu">

<van-swipe class="my-swipe" autoplay='false' :loop=false indicator-color="white">
  <van-swipe-item v-for="(page,i) in pages" :key="i">
      <div class="home_menu">
            <div class="img_box"  v-for="(menuinfo,index) in page" :key=index>
              <img :src=menuinfo.img />
              <span>{{menuinfo.title}}</span>
            </div>
          </div>
  </van-swipe-item>
</van-swipe>

          
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          img:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        }
      ]
    };
  },
  computed:{
      //轮播图页数
      pages(){
          const pages=[]
          this.menuList.forEach((item,index)=>{
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page]=[]
              }
             pages[page].push(item)
          })
          return pages
      }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/common.less";
.home_menu {
  margin-top: 20rem / @cop;
  display: flex;
  flex-flow: wrap;
  font-weight: 600;
  font-size: 26rem / @cop;
  .img_box {
    width: 25%;
    display: flex;
    justify-content: center;
    margin-bottom: 12rem / @cop;
    flex-flow: column;
    align-items: center;
    img {
      width: 80%;
    }
  }
}

</style>