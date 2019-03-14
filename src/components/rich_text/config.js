export default{
    menu:[ //菜单参数配置
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
  ],
  colors:[//颜色
    '#000000',
    '#eeece0',
    '#1c487f',
    '#4d80bf',
    '#c24f4a',
    '#8baa4a',
    '#7b5ba1',
    '#46acc8',
    '#f9963b',
    '#ffffff'
],
emotions:[
      {
          // tab 的标题
          title: '默认',
          // type -> 'emoji' / 'image'
          type: 'image',
          // content -> 数组
          content: [
              {
                  alt: '[坏笑]',
                  src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
              },
              {
                  alt: '[舔屏]',
                  src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
              }
          ]
      },
      {
          // tab 的标题
          title: 'emoji',
          // type -> 'emoji' / 'image'
          type: 'emoji',
          // content -> 数组
          content: ['😀', '😃', '😄', '😁', '😆']
      }
  ]

}