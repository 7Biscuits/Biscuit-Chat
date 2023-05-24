import { Configuration, OpenAIApi } from "openai"
// import dotenv from "dotenv"

// dotenv.config()

const configuration = new Configuration({
    // apiKey: process.env.OPENAI_KEY
    apiKey: "c4snkbYN3KkP13uG698TT3BlbkFJsdnYvENU121I057U8nF4"
})

const openai = new OpenAIApi(configuration)

async function response(prompt) {
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    return res.data.choices[0].text
}

export default response