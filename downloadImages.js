const axios = require('axios')
const fs = require('fs')
const path = require('path')

const images = [
  'https://imgur.com/1CxJz8E.png',
  'https://imgur.com/1SVaEBk.png',
  'https://imgur.com/2IeocI8.png',
  'https://imgur.com/3CF1UhY.png',
  'https://imgur.com/3lTxDpl.png',
  'https://imgur.com/4GvUw3G.png',
  'https://imgur.com/9LRil4N.png',
  'https://imgur.com/AzT9YMP.png',
  'https://imgur.com/BqNWnDB.png',
  'https://imgur.com/CPxlyEg.png',
  'https://imgur.com/IX5eunc.png',
  'https://imgur.com/JIgzykM.png',
  'https://imgur.com/LXnUnd2.png',
  'https://imgur.com/Mxjvkws.png',
  'https://imgur.com/Ondg3Jn.png',
  'https://imgur.com/T3v629h.png',
  'https://imgur.com/VMe3WBk.png',
  'https://imgur.com/X3MQNVs.png',
  'https://imgur.com/ZuLatzs.png',
  'https://imgur.com/a964vBm.png',
  'https://imgur.com/aL3nj5t.png',
  'https://imgur.com/aLObdQK.png',
  'https://imgur.com/faQ0IXH.png',
  'https://imgur.com/gLQsp6N.png',
  'https://imgur.com/guV5cUF.png',
  'https://imgur.com/ntrEPb1.png',
  'https://imgur.com/qm1gaGD.png',
  'https://imgur.com/v3lqCEb.png',
  'https://imgur.com/wvpHOCm.png',
  'https://imgur.com/xJD093X.png',
]

const downloadImage = async (url, filepath) => {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filepath)
    response.data.pipe(writer)
    let error = null
    writer.on('error', err => {
      error = err
      writer.close()
      reject(err)
    })
    writer.on('close', () => {
      if (!error) {
        resolve(true)
      }
    })
  })
}

const downloadImages = async () => {
  const downloadDir = path.join(__dirname, 'images')
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir)
  }

  for (const url of images) {
    const filename = path.basename(url)
    const filepath = path.join(downloadDir, filename)
    console.log(`Downloading ${filename}...`)
    await downloadImage(url, filepath)
    console.log(`${filename} downloaded to ${filepath}`)
  }
}

downloadImages()
  .then(() => console.log('All images downloaded'))
  .catch(err => console.error('Error downloading images:', err))
