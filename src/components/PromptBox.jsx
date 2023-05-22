import { useState } from "react"

const PromptBox = (props) => {

    let [prompt, setPrompt] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        props.newPrompt(prompt, false)
        setPrompt('')
        e.target.prompt.value = ''
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                    <div>
                        <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                        </div>
                    </div>
                    <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                        <input onChange={(e) => setPrompt(e.target.value)} name="prompt" type="text" tabindex="0" data-id="root" rows="1" placeholder="Send a message." className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 dark:bg-transparent pl-2 md:pl-0">
                        </input>
                        <button disabled={!prompt} name="submitBtn" className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PromptBox