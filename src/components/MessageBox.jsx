const MessageBox = ({ message, bot }) => {
    return (
        <>
            <div className={bot ? "p-6 text-sm text-gray-200 bg-gray-600" : "p-6 text-sm text-gray-200 bg-transparent"}>
                <div className="mx-10">
                    <img className="inline-block" width="50" height="50" src={bot ? "https://www.pngmart.com/files/22/Bot-Angry-Icon-PNG-Image.png" : "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg"} alt={bot ? "bot" : "user"} />
                    <span className="font-medium mx-5">{message}</span>
                </div>
            </div>
        </>
    )
}

export default MessageBox
