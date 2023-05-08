const fs = require("fs");
const path = require("path");

const pathFolder = path.join(__dirname);

const pathFolderSrc = path.join(pathFolder, "files");
const pathFolderDest = path.join(pathFolder, "files-copy");

fs.mkdir(pathFolderDest, { recursive: true }, (err) => {
  if (err) throw err;
});
fs.readdir(pathFolderDest, { withFileTypes: true }, (error, data) => {
  if(error) {
    throw error;
  } else {
    data.forEach((el) => {
      if(el.isFile()) {
      const pathFolderFileDest = path.join(pathFolderDest, el.name);
      fs.unlink(pathFolderFileDest, (err) => {
        if(err) throw err;
      });
      }
    })
  }
});
fs.readdir(pathFolderSrc, { withFileTypes: true }, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    data.forEach((el) => {
      if (el.isFile()) {
        const pathFolderFileSrc = path.join(pathFolderSrc, el.name);
        const pathFolderFileDest = path.join(pathFolderDest, el.name);
        fs.copyFile(pathFolderFileSrc, pathFolderFileDest, (err) => {
          if (err) throw err;
        });
      }
    });
  }
});
