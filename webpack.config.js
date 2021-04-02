module.exports = {
    //  此处省略已有内容
    module: {
        rules: [
          //  此处省略已有的其他规则内容
          {
            //增加less配置支持
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader",
          }
        ]
    }
}
