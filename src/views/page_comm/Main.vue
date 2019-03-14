<template>
  <div>
    <el-container class="re-container">
      <el-header class="re-header">
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-container class="re-bottom-main">
        <el-aside class="re-aside" style="width:auto;">
          <LayoutAside></LayoutAside>
        </el-aside>
        <el-main class="re-main">Main
          <!-- 三级路由 -->
          <div>
            <RichText></RichText>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import http from '@/utils/http_fetch'
  export default {
    components:{
      LayoutHeader:resolve=>require(['@/components/layout/Header'],resolve),
      LayoutAside:resolve=>require(['@/components/layout/Aside'],resolve),
      RichText:resolve=>require(['@/components/rich_text/Index'],resolve),
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    },
    created() {
      http.get('/novelSearchApi',{name:'盗墓笔记'})
    },
  }
</script>

<style lang="less" scoped>
.re-container{
  .re-header{
    padding: 0;
    // border: 1px solid #000;
  }
  .re-bottom-main{
    height: 900px;
    // border: 1px solid green;
      .re-aside{
        width: auto;
        // border: 1px solid purple;
      }
      .re-main{
        padding: 10px;
        background: #e4e4e4;
        // border: 1px solid yellow;
      }
  }
}
</style>



