//主线程，单线程
//event loop
//启动一个 web worker线程

const worker = new Worker('./compressWorker.js')
worker.onmessage = function(e){
    console.log(e.data)
    if(e.data.success){
        document.getElementById('output').innerHTML=`
        <img src="${e.data.data}" />
        `
    }else{
        console.log(e.data.msg,e.data.err)
    }
}

function handleFile(file){
    return new Promise((resolve)=>{
        const reader = new FileReader()//html5的文件对象，

        reader.readAsDataURL(file)//返回此文件的base64编码
        reader.onload = function(){
            resolve(reader.result)
        }
    })

}

async function compressFile(file){
    const imgDataUrl = await handleFile(file)
    // console.log(imgDataUrl,'////')
    //干复杂计算的同时不影响页面的性能
    worker.postMessage({
        imgData:imgDataUrl,
        quality:0.2,
    })
}


const oFile = document.getElementById('fileInput')
oFile.addEventListener('change',async function(e){
    console.log(e.target.files)
    const file = e.target.files[0]
    if(!file){
        return
    }
    await compressFile(file)



})

