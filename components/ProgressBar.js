import { useEffect } from "react";
// import useStorage from "../hooks/useStorage";



function ProgressBar({imageUrl, setFile, progress}) {
    // const { url, progress } = useStorage(file)

    useEffect(()=>{
        if(imageUrl){
            setFile(null)
        }

    },[imageUrl])

    console.log(progress, imageUrl)

    return (
        <progress id="file" max="100" value={progress}> 
            {progress}%
        </progress>
    )
}

export default ProgressBar
