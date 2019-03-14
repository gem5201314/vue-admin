<template>
  <div class="aside">
    <el-menu 
      default-active="2" 
      :collapse='false' 
      class="el-menu-vertical-demo aside-menu" 
      @open="handleOpen" 
      @close="handleClose" 
      :background-color="configMenu.backgroundColor" 
      :text-color="configMenu.textColor" 
      :active-text-color="configMenu.ActiveTextColor">
      <!-- 三级 -->
      <el-submenu  v-for="(valA,iA) in navOverLevel" :index="'overleave'+iA" :key="iA">
        <template slot="title">
          <i :class="valA.icon"></i>
          <span>{{valA.title}}</span>
        </template>
          <!-- 三级里的二级 -->
        <el-menu-item-group>
          <el-menu-item v-for="(valB,iB) in valA.children" :index="'towleave'+iA+iB" v-if="!valB.children" :key="iB">{{valB.title}}</el-menu-item>
          <el-submenu v-for="(valB,iB) in valA.children" :index="'towleave'+iA+iB" :key="iB" v-if="valB.children">
            <span slot="title">{{valB.title}}</span>
            <el-menu-item-group>
              <el-menu-item v-for="(valC,iC) in valB.children" :index="'oneleave'+iA+iB+iC" :key="iC">{{valC.title}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu-item-group>
      </el-submenu>

      <!-- 只有一级 -->
      <el-menu-item v-for="(val,i) in navOneLevel" :index="'oneleave_'+i" :key="'oneleave_'+i">
        <i :class="val.icon"></i>
        <span slot="title">{{val.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import json from '@/config/left_nav_conf'
  export default {
    data() {
      return {
        configMenu:{},//菜单配置
        navOneLevel:[],//一级菜单列表
        navOverLevel:[],//多级菜单列表   
      }
    },
    methods: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 导航数据解析
      navDataRest(json){
        this.configMenu=json
        this.navOneLevel=json.leftNavList.filter((v,i)=>{ //返回只有一级的导航     
            return !v.children    
        })
        this.navOverLevel=json.leftNavList.filter((v,i)=>{ //返回只有二级和三级的导航     
            return v.children    
        })
        
      }
    },
    mounted() {},
    created() {
      this.navDataRest(json)
    },
  }
</script>

<style lang="less">
  .aside {
    width: 200px;
    height: 100%;
    font-size: 14px;
    font-weight: 100;
    .aside-menu{
      height: 100%;
    }
  }
</style>


