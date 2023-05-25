const MessageBox = ({ prompt, bot }) => {
    return (
        <>
            <div className={bot ? "px-6 py-3 text-sm text-gray-200 bg-gray-600" : "px-6 py-3 text-sm text-gray-200 bg-transparent"}>
                <div className="mx-10">
                    <img className="inline-block rounded-full" width="40" height="40" src={bot ? "https://www.pngmart.com/files/22/Bot-Angry-Icon-PNG-Image.png" : "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg"} alt={bot ? "bot" : "user"} />
                    <span name="prompt" className="font-medium mx-5">{prompt}</span>
                    <svg className={bot ? "inline-block cursor-pointer invert" : "hidden"} onClick={() => {navigator.clipboard.writeText(prompt)}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" id="copy"><path fill="#212121" d="M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z"></path></svg>
                </div>
            </div>
        </>
    )
}

export default MessageBox