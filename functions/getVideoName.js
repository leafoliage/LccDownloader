const fetch = require("node-fetch")
const { parse } = require("node-html-parser")

const getVideoName = async (id) => {
    const html = await fetch(`https://www.lccnet.tv/pages/watch.aspx?v=P0${id}`)
        .then(data => data.text())
    const root = parse(html)
    return root.querySelector(".con").childNodes[0].rawText
}

module.exports = getVideoName