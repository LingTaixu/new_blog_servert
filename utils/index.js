const fs = require('fs');
function load(val, directory = '') {
  let arrFiles = [];
  const files = fs.readdirSync(val);
  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    const stat = fs.lstatSync(val + '/' + item);
    if (stat.isDirectory() === true) {
      arrFiles = arrFiles.concat(load(val + '/' + item, item));
    } else {
      var reg = /^.*\.md$/;
      var reg1 = /^.*\.md$/;
      if (reg.test(item) || reg1.test(item)) {
        /* 获取的是所有的文件 */
        if (directory) {
          arrFiles.push('/' + directory + '/' + item.replace(/\.md$/, ''));
        } else {
          arrFiles.push('/' + item.replace(/\.md$/, ''));
        }
      }
    }
  }
  return arrFiles;
}
module.exports = load;
