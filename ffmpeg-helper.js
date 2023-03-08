// ./ffmpeg-helper.js
// 把 mp4 檔轉換成 .m3u8 索引檔和多支 .ts 檔
const ffmpeg = require('fluent-ffmpeg');

module.exports = {
  convertToHls: async (file) => {
    return new Promise((resolve) => {
      ffmpeg(file, { timeout: 432000 })
        .addOptions([
          '-profile:v baseline', // for H264 video codec
          '-level 3.0',
          '-s 4096x2160', // 640px width, 360px height
          '-start_number 0', // start the first .ts segment at index 0
          '-hls_time 10', // 10 second segment duration
          '-hls_list_size 0', // Maximum number of playlist entries
          '-f hls', // HLS format
        ])
        .output('./source-m3u8/output.m3u8')
        .on('end', () => {
          console.log('finish');
          resolve();
        })
        .run();
    });
  },
};