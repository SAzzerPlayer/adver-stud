const fs = require("fs");
const path = require("path");

(function start() {
  const workPath = path.join(__dirname, "..", "src/images");
  const names = [];
  for (const fileNameLevel1 of fs.readdirSync(workPath)) {
    const newPath = path.join(workPath, fileNameLevel1);
    if (fs.statSync(newPath).isFile()) {
      names.push(fileNameLevel1.split(".")[0]);
    } else {
      for (const fileNameLevel2 of fs.readdirSync(newPath)) {
        if (fs.statSync(path.join(newPath, fileNameLevel2)).isFile()) {
          names.push(fileNameLevel2.split(".")[0]);
        }
      }
    }
  }

  if (names.length === 0) return;

  let savedFileContent = `export type TImageAssetName = `;

  names.forEach((name, index) => {
    savedFileContent += `\n     '${name}'`;
    if (index !== names.length - 1) {
      savedFileContent += " | ";
    }
  });

  savedFileContent += ";";

  const savePath = path.join(__dirname, "..", "src/types/images.ts");

  fs.writeFileSync(savePath, savedFileContent);
})();
