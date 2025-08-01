 import Mock from 'mockjs';

 //每页10个，两列，一列5个 瀑布流 翻页
 const getImages = (page,pageSize=10)=>{
   return Array.from({length:pageSize},(_,i)=>({
    id:`${page}-${i}`,
    height:Mock.Random.integer(300,600),
    url:Mock.Random.image('300x400',Mock.Random.color(),'#fff','img')
   }))
 }

export default [{
    url: '/api/search',
    method: 'get',
    timeout: 1000,
    response:(req, res) => {
        // ?keyword=释小龙
        const keyword = req.query.keyword;
        let num = Math.floor(Math.random() * 10);//生成0~9的随机数，floor向下取整
        let list = []
        for(let i=0;i<num;i++){
            //随机的内容，标题，描述，用户名，头像
            const randomData = Mock.mock({
              title:'@ctitle'
            })
            console.log(randomData)
            list.push(`${randomData.title}${keyword}`)
        }
        return {
            code: 0,
            data: list
        }
    }
},
{
    url:'/api/hotlist',
    method:'get',
    timeout:1000,
    response:(req,res)=>{
        return {
            code:0,
            data:[{
                id:'101',
                city:"北京"
            },{
                id:'102',
                city:"上海"
            },{
                id:'103',
                city:"广州"
            }]
        }
    }
},
{
    url:"/api/detail/:id",
    method:'get',
    timeout:1000,
    response:(req,res)=>{
        const randomData = Mock.mock({
            title:'@ctitle(5,10)',
            price:'@integer(60,100)',
            desc:'@cparagraph(10,30)',
            images:[
                {
                    url:'@image(300x200,@color,#fff,图片)',
                    alt:'@ctitle(5,10)'
                },
                {
                    url:'@image(300x200,@color,#fff,图片)',
                    alt:'@ctitle(5,10)'
                },
                {
                    url:'@image(300x200,@color,#fff,图片)',
                    alt:'@ctitle(5,10)'
                }
            ]
        })
        return {
            code:0,
            data:randomData
        }
    }
},
{
    //?page=1 queryString
    url:'/api/images',
    method:'get',
    response:({query})=>{
        const page = Number(query.page) || 1;
        return {
            code:0,
            data:getImages(page)
        }
    }
}
]