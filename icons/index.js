import Vue from 'vue'
import SvgIcon from "@/components/SvgIcon"
Vue.component('svg-icon', SvgIcon)

// 2. 自动加载svg目录下所有svg文件
// 参数2 递归, 参数3 正则, 返回 加载方法
const req = require.context('./svg', false, /\.svg$/)
// req.keys() 获取到目录下所有的文件名
req.keys().map(req); // 相关于 map(filename => require(filename))

