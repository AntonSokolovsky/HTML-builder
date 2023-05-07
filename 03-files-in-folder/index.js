const fs = require('fs');
const path = require('path');
const pathFolderOut = path.join(__dirname, 'secret-folder')

fs.readdir(pathFolderOut, 
    { withFileTypes: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }else {
        data.forEach(el => {
          if (el.isFile()) {
            const pathFileOut = path.join(pathFolderOut, el.name);
            const objFiles = path.parse(pathFileOut);
            fs.stat(pathFileOut, (error, stats) => {
              if (error) throw error;
            console.log(`${objFiles.name} - ${objFiles.ext.slice(1)} - ${stats.size}b`);
            });
          }
        });
      }
    });
