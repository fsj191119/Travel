<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <div class="info_box">
        <div class="box_img">
            <img src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
        </div>

        <div class="text_box">
            <span class="box_title">大连圣亚海洋世界</span>
            <span class="content">浪漫大连首站,浪漫的海洋主题公园<br/><span class="y">￥</span><span class="price">99</span>起</span>
        </div>
    </div>

 <div class="info_box">
        <div class="box_img">
            <img src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
        </div>
        
        <div class="text_box">
            <span class="box_title">大连圣亚海洋世界</span>
            <span class="content">浪漫大连首站,浪漫的海洋主题公园<br/><span class="y">￥</span><span class="price">99</span>起</span>
        </div>
    </div>

     <div class="info_box">
        <div class="box_img">
            <img src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
        </div>
        
        <div class="text_box">
            <span class="box_title">大连圣亚海洋世界</span>
            <span class="content">浪漫大连首站,浪漫的海洋主题公园<br/><span class="y">￥</span><span class="price">99</span>起</span>
        </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/assets/style/common.less";
.recommend {
  .title {
    font-size: 28rem / @cop;
    font-weight: 600;
    color: #2e2c2e;
    height: 88rem / @cop;
    line-height: 88rem / @cop;
    background-color: #f5f4f6;
    padding-left: 15rem / @cop;
  }
  .info_box{
      border-bottom: 1rem / @cop solid #ccc;
      display: flex;
      align-items: center;
      padding: 20rem / @cop;
      .box_img{
          width: 150rem / @cop;
          height: 150rem / @cop;
          img{
              width: 100%;
              height: 100%;
          }
      }
      
      .text_box{
          display: flex;
          flex-flow: column;
          justify-content: center;
          text-align: left;
          padding-left: 15rem / @cop;
          line-height: 55rem / @cop;
          .box_title{
              font-size: 30rem / @cop;
              font-weight: 600;
          }
          .content{
              font-size: 28rem / @cop;
              color: #9F9EA0;
              letter-spacing:2rem / @cop;
              .y{
                  color: #CA8C57;
              }
              .price{
                  color: #CA8C57;
                  font-size: 35rem / @cop;
                  font-weight: 600;
              }
          }
      }
  }
}
</style>