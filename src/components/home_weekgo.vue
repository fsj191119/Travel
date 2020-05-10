<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <div class="info_box">
        <div class="box_img">
            <img src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
        </div>

        <div class="text_box">
            <p class="box_title">温泉有水上乐园</p>
            <span class="content">泡泡温泉，吹吹海风，深感人生美好</span>
        </div>
    </div>

    <div class="info_box">
        <div class="box_img">
            <img src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
        </div>

        <div class="text_box">
            <p class="box_title">温泉有水上乐园</p>
            <span class="content">泡泡温泉，吹吹海风，深感人生美好</span>
        </div>
    </div>

    <div class="info_box">
        <div class="box_img">
            <img src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
        </div>

        <div class="text_box">
            <p class="box_title">温泉有水上乐园</p>
            <span class="content">泡泡温泉，吹吹海风，深感人生美好</span>
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
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 20rem / @cop;
      overflow: hidden;
      .box_img{
          width: 98%;
          height: 260rem / @cop;
          text-align: center;
          img{
              width: 100%;
              height: 100%;
          }
      }
      
      .text_box{
          width: 100%;
          text-align: left;
          padding-top: 20rem / @cop;
          padding-left: 40rem / @cop;
          line-height: 45rem / @cop;
          .box_title{
              font-size: 30rem / @cop;
              font-weight: 600;
          }
          .content{
              font-size: 28rem / @cop;
              color: #9F9EA0;
              letter-spacing:2rem / @cop;
          }
      }
  }
}
</style>