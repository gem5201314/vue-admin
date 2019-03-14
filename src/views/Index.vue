<template>
  <div class="project-main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods:{},
    mounted(){},
    created(){},
  }
</script>
 <style lang="less">
// 导入全局样式
  @import '../styles/public.css';
  .project{
      overflow: hidden;
  }
</style>


