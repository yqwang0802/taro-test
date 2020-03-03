import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goQuestion() {
    Taro.navigateTo({
      url: '/pages/question/question'
    })
  }
  goAgree() {
    console.log('risk')
  }


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index-wrap'>
        <View className='index_bottom--wrap'>
          <AtButton type='primary' className='index_bottom--btn' onClick={this.goQuestion}>开始答题</AtButton>
          <Text>点击开始答题, 表示同意</Text><Text className='index_bottom--link'  onClick={this.goAgree}>免责声明</Text>
        </View>
      </View>

    )
  }
}
