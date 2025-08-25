import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

// react.functionComponents泛型约束
const Demo: React.FC = () => {
  // 可变对象 指向为null -> div节点
  // ts类型约束让代码更加严谨
  const chartRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (chartRef.current) {
      // 初始化echarts实例
      const chart = echarts.init(chartRef.current)
      const option = {//配置
        title: {
          text: 'echarts 实例'
        },
        tooltip: {

        },
        legend: {
          data: ['销量']
        },
        series: [
          {
            name: '销量',
            type: 'pie',//饼状图
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' },
            ]

          }
        ]
      }
      chart.setOption(option)

    }

  })

  return (
    <div ref={chartRef} style={{ width: '600px', height: '400px' }} />
  )

}
export default Demo
