const downloadVideo = require("./functions/downloadVideo")
const info = require("./info.json")
const wheel = ['/', '-', '\\', '|']
const cap = 1, gap = 10

const { startId, endId, startNo, saveDir } = info

let record = []
let progess = 0, goal = (endId - startId) / gap + 1

const run = async () => {
    process.stdout.write("\rWorking... " + progess + "/" + goal + " finished  ")
    for (let i = startId, no = startNo; i <= endId; i += cap * gap) {
        let buffer = []
        for (let j = i; j < i + cap * gap && j <= endId; j += gap) {
            buffer.push(downloadVideo(j, no, saveDir))
            no++
        }
        await Promise.all(buffer).then(datas => {
            record.push(...datas)
            progess += buffer.length
            process.stdout.write("\rWorking... " + progess + "/" + goal + " finished  ")
        })
    }

    let sucess = record.filter(rec => rec.ok === true)
    let fail = record.filter(rec => rec.ok === false)
    console.log("\nSuccess:", sucess.length, "\nFail:", fail.length)
    if (fail.length > 0) {
        fail.forEach(video => console.log(video.id, video.no, video.err.message))
    }
}

run()
let t = 0
let intervalId = setInterval(() => {
    if (progess === goal) clearInterval(intervalId)
    process.stdout.write("\b" + wheel[t])
    t = (t + 1) % 4
}, 100)