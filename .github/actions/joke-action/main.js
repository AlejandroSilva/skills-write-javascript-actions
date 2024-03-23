const joke = require('./joke')
const core = require('@actions/core')

const run = async () => {
    const joke = await joke()
    console.log(joke)
    core.info(joke)
    core.setOutput("joke-output", joke)
}

run()