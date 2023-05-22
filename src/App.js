import { useState } from "react"
import MessageBox from "./components/MessageBox"
import PromptBox from "./components/PromptBox"

const App = () => {

  let [messages, setMessages] = useState([])

  const appendMessage = (prompt, bot) => {
    setMessages(messages => [...messages, <MessageBox message={prompt} bot={bot} />])
  }

  return (
    <div className="min-w-full min-h-screen bg-gray-800">
      <div className="overflow-x-scroll">
        {messages}
      </div>
        <div className="fixed mt-[38rem] bottom-0 top-0 right-0 left-0">
          <PromptBox newPrompt={(prompt, bot) => appendMessage(prompt, bot)} />
        </div>
    </div>
  )
}

export default App