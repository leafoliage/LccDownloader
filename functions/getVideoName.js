const fetch = require("node-fetch")
const { parse } = require("node-html-parser")

const getVideoName = async (url) => {
    const html = await fetch(url).then(data => data.text())
    const root = parse(html)
    return root.querySelector(".con").childNodes[0].rawText
}

module.exports = getVideoName