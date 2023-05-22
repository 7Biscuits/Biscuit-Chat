import { useState } from "react"
import Sidebar from "./components/Sidebar"
import MessageBox from "./components/MessageBox"
import PromptBox from "./components/PromptBox"

const App = () => {

  let [messages, setMessages] = useState([])

  const appendMessage = (prompt, bot) => {
    setMessages(messages => [...messages, <MessageBox message={prompt} bot={bot} />])
  }

  return (
    <>
      <div className="max-w-full min-h-screen bg-gray-800">
        <Sidebar />
        <div className="overflow-x-scroll absolute ml-[20rem]">
          <MessageBox message={"Hello world"} />
          {/* {messages} */}
        </div>
        <div className="block absolute bottom-0 left-0 right-0">
          <PromptBox newPrompt={(prompt, bot) => appendMessage(prompt, bot)} />
        </div>
      </div>
    </>
  )
}

export default App