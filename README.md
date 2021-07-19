# LccDownloader
A tool for downloading lccnet videos
p.s. this is just 4 fun :D

## Setup

Pleas add `info.json` under root directory once you cloned this repo with following information:

```
{
    "startId": 32840,
    "endId": 33000,
    "startNo": 1,
    "saveDir": "C:/Users/User/Videos"
}
```

`startId` and `endId` are the id of the first and last video you're going to download. You can find the id in their address (ex. "....v=P032840", then the id would be "32840"). 
Each video would be given a number according to ther order, `startNo` is the number given to the first video.
Remeber to change `saveDir`, which is the directory you're going to save your videos, as well.

## Run

After giving those infos, run `npm start` to start download.
