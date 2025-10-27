import { View, Text } from 'react-native'//移动端UI组件库
import Icon from './Icon'

const TabBarIcon = ({focused,iconName,text})=>{
  return(
    <View>
      <Icon name={iconName} size={16} color={focused ? '#123' : '#456'}/>
      <Text style={{fontSize: 12, color: focused ? '#123' : '#456'}}>{text}</Text>
    </View>
  )
}
export default TabBarIcon