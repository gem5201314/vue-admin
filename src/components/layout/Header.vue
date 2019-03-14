<template>
  <div class="header">
    <div class="head-main">
      <div class="left-logo">
        <img src="https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png" alt="">
      </div>
      <div class="right-flex">
        <div class="breadcrumb"></div>
        <div class="center"></div>
        <div class="right-user"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {},
    created() {},
  }
</script>

<style lang="less">
  .header {
    height: 100%;
    border: 1px solid red;
    box-sizing: border-box;
    .head-main {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 5px;
      box-sizing: border-box;
      .left-logo {
        width: 195px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-flex {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border: 1px solid green;
        box-sizing: border-box;
        .breadcrumb {
          width: 300px;
        }
        .center {}
        .right-user {
          width: 300px;
          height: 100%;
        }
      }
    }
  }
</style>


