//console.log('智能前端，智能后端')
const loginform = document.getElementById('loginForm');
loginform.addEventListener('submit', async(event)=> {
    event.preventDefault();//阻止表单默认提交
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    //console.log(username,password);
    try{
        const response = await fetch('/login',{
            method:'POST',//post请求
            headers:{//请求头
                'Content-Type':'application/json'//等下解析请求时，作为json格式来解析
            },
            body:JSON.stringify({
                username,
                password
            })
        })
        const data = await response.json();//解析响应体
        console.log(data);
    }catch(err){
        console.log('登入出错');
    }
})
document.addEventListener('DOMContentLoaded',async()=>{//页面加载完成后执行
    //我登入了吗？
    try{
        const response = await fetch('/check-login');//get请求
        const data = await response.json();//解析响应体
        //console.log(data);//{loggedIn: true, username: 'admin'}
        if(data.loggedIn){//如果已经登入了
            document.getElementById('loginForm').style.display = 'none';//隐藏登入表单
            document.getElementById('welcomeSection').style.display = 'block';//显示登出按钮
            document.getElementById('userDisplay').textContent = data.username;//显示用户名
        }else{
            document.getElementById('loginSection').style.display = 'block';
        document.getElementById('welcomeSection').style.display = 'none';
        }
    }catch(err){
        console.log('检查登入状态出错');
    }
    })