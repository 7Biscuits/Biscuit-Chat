import MessageBox from "./components/MessageBox"
import PromptBox from "./components/PromptBox"

const App = () => {
  return (
    <div className="min-w-full min-h-screen bg-gray-800">
      <div className="overflow-x-scroll">
        {/* <MessageBox message={"Hello, how can I assist you today?"} bot={false} />
        <MessageBox message={"Hello, how can I assist you today?"} bot={true} /> */}
      </div>
        <div className="fixed mt-[38rem] bottom-0 top-0 right-0 left-0">
          <PromptBox newPrompt={(prompt) => console.log(prompt)} />
        </div>
    </div>
  )
}

export default App