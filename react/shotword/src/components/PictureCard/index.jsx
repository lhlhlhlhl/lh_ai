import './style.css';
import { useState } from 'react';
const PictureCard = (props)=>{
    const {
        word,
        uploadImg,//回调函数
        audio
    } = props
    const [imgPreview,setImgPreview]= useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png')
    const playAudio = () => {
        const audioEle = new Audio(audio);
        audioEle.play();
    }
    const uploadeImgData = (e) => {
        const file = (e.target).files?.[0];
        if (!file) { return; }
        return new Promise((resolve, reject) => {
            const reader = new FileReader();//html5
            reader.readAsDataURL(file);//读取文件
            reader.onload = () => {
                const data = reader.result;//base64编码
                setImgPreview(data);
                uploadImg(data);//上报老板
                resolve(data);
            }
            reader.onerror = (error) => { reject(error); };
        })
       
    }

    return (
        <div className="card">
            <input 
            type="file" 
            id="selectImage"
            accept=".jpg,.jpeg,.png,.gif"
            onChange={uploadeImgData}
            />
            <label className="upload" htmlFor="selectImage">
                <img src={imgPreview} alt="preview" />
            {/* htmlFor="selectImage"点击标签时会自动触发文件选择对话框 */}
            </label>
            <div className="word">{word}</div>
            {audio && (
                <div className="playAudio" onClick={playAudio}>
                    <img width="20px" src="https://res.bearbobo.com/resource/upload/Omq2HFs8/playA-3iob5qyckpa.png" alt="logo" />
                </div>
            )}
        </div>
    )
}
export default PictureCard;