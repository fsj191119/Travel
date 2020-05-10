<template>
    <div class="status">
        <div class="address">定位失败</div>
        <div class="right">5折泡温泉</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';
.status{
    display: flex;
    font-size: 28rem / @cop;
    font-weight: 600;
    color: #2E2C2E;
    justify-content: space-around;
    border-top: 2rem / @cop solid #ccc;
    margin-top: 30rem  / @cop;
    height: 88rem / @cop;
    line-height: 88rem / @cop;
    .address{
        border-right: 2rem / @cop solid #ccc;
        flex: 1;
        text-align: center;
    }
    .right{
        flex: 1;
        text-align: center;
    }
}
</style>