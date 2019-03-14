<template>
   <div class="rich-text">
     <div id="main"></div>
   </div>
</template>
<script>
import config from './config.js'
import richText from 'wangeditor'
export default {
  data(){
    return{
      editor:"",//富文本实例
      uploadUrl:"https://jsonplaceholder.typicode.com/posts/"//上传图片的服务器地址
    }
  },
  methods:{
    // 初始化
    richInit(){
      this.editor=new richText("#main")
      this.editor.customConfig.menus = config.menu//富文本菜单参数配置
      this.editor.customConfig.colors =config.colors // 自定义配置颜色（字体颜色、背景色）
      this.editor.customConfig.emotions =config.emotions// 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置  
      this.editor.customConfig.uploadImgServer = this.uploadUrl  // 上传图片到服务器
      this.editor.create()
    }
  },
  mounted(){
    this.richInit()
  },
}
</script>
<style lang="less" scoped>
  #main{
    background: #fff;
  }
</style>


