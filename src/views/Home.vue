<template>
  <div>
    <a-menu mode="inline" :open-keys="openKeys" style="width: 100%" @openChange="onOpenChange">
        <a-menu-item key="1">
          Option 1
        </a-menu-item>
        <a-menu-item key="2">
          Option 2
        </a-menu-item>
        <a-menu-item key="3">
          Option 3
        </a-menu-item>
        <a-menu-item key="4">
          Option 4
        </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
      };
    },
    methods: {
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    },
  };
</script>
<style>
  ul{
    display: flex;
  }
  .ant-menu-inline .ant-menu-item::after{
    border-right: none !important;
    border-bottom: 3px solid #1890ff !important;
  }
  li{
    border-bottom: 3px solid #1890ff !important;
    width: 100px !important;
    margin: 0 20px !important;
  }
</style>