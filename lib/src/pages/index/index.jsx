"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
require("./index.scss");
class Index extends taro_1.Component {
    constructor(props) {
        super(props);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '首页'
        };
        this.state = { text: '' };
    }
    componentWillMount() { }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    greeter(person) {
        return "Hello, " + person;
    }
    render() {
        return (<components_1.View className='index'>
        <components_1.Text>Hello world!</components_1.Text>
      </components_1.View>);
    }
}
exports.default = Index;
//# sourceMappingURL=index.jsx.map