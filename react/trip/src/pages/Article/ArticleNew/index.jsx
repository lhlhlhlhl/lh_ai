import styles from './new.module.css'
import { useState,useRef } from 'react'


const ArticleNew = () =>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    //可变对象 
    const mediaRecorderRef = useRef(null)
    //存储一些数据
    const chunksRef = useRef([])
    const blobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]); // 只取 base64 数据部分
      reader.readAsDataURL(blob);
        });
    };


    const handleStartRecording =async()=>{
        try {
            // 申请麦克风权限 BOM对象 
            const stream = await window.navigator.mediaDevices.getUserMedia({ audio: true })
            // console.log(stream)
            // 创建MediaRecorder对象 保存对象功能 存储
            mediaRecorderRef.current = new MediaRecorder(stream)
            // console.log(mediaRecorderRef.current)
            mediaRecorderRef.current.start();
            console.log('录音开始')
            console.log('录音中...')

            mediaRecorderRef.current.ondataavailable = (e)=>{

                if(e.data.size>0){
                    chunksRef.current.push(e.data)
                }

            }
            mediaRecorderRef.current.onstop = async()=>{
                // console.log('录音已停止,数据为：'+chunksRef.current)
                const blob = new Blob(chunksRef.current,{type:'audio/webm'})
                console.log(blob)
                const base64Audio = await blobToBase64(blob)
                console.log(base64Audio)
                const tanscript  = await transcribeAudio(base64Audio)
            }

        } catch (error) {
            message.error('请先打开麦克风权限')
        }
    }
    const transcribeAudio = async(base64Audio)=>{
        const response = await fetch('http://localhost:3000/api/transcribe',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                audio:base64Audio
            })
        })
    }

    const handleStopRecording =()=>{
        // console.log('停止录音')
        mediaRecorderRef.current?.stop();
    }
    const handlePublish =()=>{
        if(title.trim() === ''){
            message.error('请输入标题')
            return
        }
        if(content.trim() === ''){
            message.error('请输入内容') 
            return
        }
    }


    return (
        <div className={styles.container}>
            <h2>文章发布</h2>
            <input 
                className={styles.input}

                type="text"
                placeholder="请输入标题"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}

            />
            <div className={styles.textareaWrapper}>
                <textarea 
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="请输入内容"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                >

                </textarea>
                <button 
                    className={styles.micButton}
                    onMouseDown={handleStartRecording}
                    onMouseUp={handleStopRecording}
                    title="按住开始录音"

                >🎤</button>
                 </div>
                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.save}`}>保存</button>
                    <button 
                    onClick={handlePublish}
                    className={`${styles.button} ${styles.publish}`}>发布</button>
                </div>

           
        </div>
    )
}
export default ArticleNew
