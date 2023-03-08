// ./convert.js
const ffmpegHelper = require('./ffmpeg-helper');

(async () => {
  await ffmpegHelper.convertToHls('./source/JSON VIEW Chrome 套件安裝.mkv');
})();