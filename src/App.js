import { useState, useEffect, useRef } from "react"
import Sidebar from "./components/Sidebar"
import MessageBox from "./components/MessageBox"
import PromptBox from "./components/PromptBox"
import response from "./Ai"

const App = () => {

  let bottomRef = useRef(null)
  let [messages, setMessages] = useState([])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="max-w-full min-h-screen bg-gray-800">
        <Sidebar />
        <div className="max-w-full h-screen overflow-x-scroll overflow-y-scroll ml-2 lg:ml-[20rem] md:ml-[15rem] xl:ml[20rem] mt-10 lg:mt-1 md:mt-1 xl:mt-1">
          { messages }
          <div ref={bottomRef} />
        </div>
        <div className="block absolute bottom-0 left-0 right-0">
          <PromptBox newPrompt={ (prompt, bot) => setMessages(messages => [...messages, <MessageBox prompt={prompt} bot={bot} />]) } />
        </div>
      </div>
    </>
  )
}

export default App