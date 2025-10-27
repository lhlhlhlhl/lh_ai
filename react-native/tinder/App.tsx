import React from 'react'
import {
  NavigationContainer
} from '@react-navigation/native'
import{
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import{
  createStackNavigator
} from '@react-navigation/stack'
import {
  Home,
  Matches,
} from './screens'
import TabBarIcon from './components/TabBarIcon'
// 浏览器的访问就是一个栈
const Stack = createStackNavigator()//访问栈
const Tab = createBottomTabNavigator()//底部底栏

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tab" 
          options={{headerShown: false,animationEnabled: false}}// 隐藏头和动画
        >
          {
            ()=>(
              <Tab.Navigator
                tabBarOptions={{
                  showLabel: false,//隐藏标签
                  activeTintColor:'#123',//激活颜色
                  inactiveTintColor:'#456',//未激活颜色
                  labelStyle:{//标签样式
                    fontSize: 14,
                    textTransform: 'uppercase',//大写
                    paddingTop: 10,
                  },
                  style:{
                    backgroundColor:'#fff',
                    borderTopWidth: 0,
                    marginBottom: 0,
                    shadowOpacity:0.05,
                    shadowRadius: 10,
                    shadowColor:'#000',
                    shadowOffset:{
                      width: 0,
                      height: 0,
                    },
                  }
                }}
              >
                <Tab.Screen 
                  name="Explore" 
                  component={Home} 
                  options={{
                    tabBarIcon:({focused})=>(
                      <TabBarIcon
                        focused={focused}
                        iconName='search'
                        text="Explore"
                      />
                    )
                  }}
                />
                 <Tab.Screen 
                  name="Matches" 
                  component={Matches} 
                  options={{
                    tabBarIcon:({focused})=>(
                      <TabBarIcon
                        focused={focused}
                        iconName='heart'
                        text="Matches"
                      />
                    )
                  }}
                />
              </Tab.Navigator>
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}