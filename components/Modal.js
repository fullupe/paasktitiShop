function Modal({selectedImg, setSelectedImg}) {

    const handleClick = (e)=>{
        if(e.target.classList.contains("fixed"))
        setSelectedImg(null)
    }
    return (
        <div onClick={handleClick} className="flex fixed top-0 left-0  h-full w-full bg-green-600 bg-opacity-25 container items-center">
            <img className="block max-h-md max-w-md  mx-auto shadow-lg rounded-lg sm:max-h-lg sm:max-w-lg  " src={selectedImg} alt="lange pic"/>
            
        </div>
    )
}

export default Modal
