
module.exports = {
  plugins: {
    "postcss-import": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {
      path: ["./src/*"],
    },
    "postcss-px-to-viewport": {
      // unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: "375", // 视窗的宽度，对应设计稿的宽度
      // viewportHeight: "1080", // 视窗的高度
      unitPrecision: 5, // 指定px转换为视窗单位值的小数位数(因为无法整除)
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: "vw", // 指定需要转换成的视窗单位，使用vw
      fontViewportUnit: 'vw', // 字体使用的视口单位

      replace: true, //  是否直接更换属性值，而不添加备用属性
      
      selectorBlackList: [], // 指定不转换为视窗单位的类 (需要忽略的CSS选择器) 不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换px

      // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 不包含node_modules文件
      exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      // include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
      
      // landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1920 // 横屏时使用的视口宽度
    },
  },
}

