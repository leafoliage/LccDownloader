const download = require("download")
const getVideoName = require("./getVideoName")

const downloadVideo = async (id, no, saveDir) => {
    try {
        return await download(`https://www.lccnet.tv/vod1/P0${id}/default.mp4`, saveDir, {
            filename: `${no} ${await getVideoName(id)}.mp4`
        }).then(() => new Object({
            id,
            no,
            ok: true
        }))
    } catch (err) {
        return {
            id,
            no,
            ok: false,
            err
        }
    }
}

module.exports = downloadVideo