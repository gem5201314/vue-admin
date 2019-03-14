
export default {
  backgroundColor:"#555b64",//菜单的背景色（仅支持 hex 格式）

  textColor:"#ffffff",//菜单的文字颜色（仅支持 hex 格式）

  activeTextColor:"#5d9aff",//当前激活菜单的文字颜色（仅支持 hex 格式

  defaultActive:"",//当前激活菜单的 index--->路由

  leftNavList:[ //菜单数据列表
    {
      title:"一级菜单(2级)", //导航名称
      icon:"el-icon-menu", //svg图标
      router:"Login",     //路由-path
      children:[         //当有二级或者三级时才写这字段
        {
          title:"二级--0",
          icon:"el-icon-menu",
          router:"Login",
        },
        {
          title:"二级--1",
          icon:"el-icon-menu",
          router:"Login",
        },
      ],
    },
    {
      title:"一级菜单(3级)",
      icon:"el-icon-menu",
      router:"Login",
      children:[
        {
          title:"二级--0",
          icon:"el-icon-menu",
          router:"Login",
        },
        {
          title:"二级--1",
          icon:"el-icon-menu",
          router:"Login",
          children:[
            {
              title:"二级--0",
              icon:"el-icon-menu",
              router:"Login",
            },
            {
              title:"二级--1",
              icon:"el-icon-menu",
              router:"Login",
            },
         ],
        },
      ],
   },
   {
     title:"一级菜单55",
     icon:"el-icon-menu",
     router:"Login",
   },
   {
     title:"一级菜单66",
     icon:"el-icon-menu",
     router:"Login",
   },
   {
     title:"一级菜单77",
     icon:"el-icon-menu",
     router:"Login",
   }
  ]
}