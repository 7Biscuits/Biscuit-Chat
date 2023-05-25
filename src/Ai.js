const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(configuration)

const response = async (prompt) => {
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    // return res.data.choices[0].text
    console.log(res.data.choices[0].text)
}

// export default response

// response("hey how are you")
console.log(process.env.OPENAI_KEY)