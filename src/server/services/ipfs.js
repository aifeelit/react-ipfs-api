const fs = require('fs');
const ipfs = require('../ipfs');
const logger = require('../logger');

async function addFile(fileName, filePath) {
  const file = fs.readFileSync(filePath);
  const fileAdded = await ipfs.add({ path: fileName, content: file });
  const fileHash = fileAdded[0].hash;
  return fileHash;
}

exports.upload = async (req, res) => {
  try {
    const { file } = req.files;
    const { fileName } = req.body;
    const filePath = `files/${fileName}`;

    file.mv(filePath, async (err) => {
      if (err) {
        throw err;
      }

      const fileHash = await addFile(fileName, filePath);

      fs.unlink(filePath, (err) => {
        if (err) {
          throw err;
        }
      });

      return res.json({ fileName, fileHash });
    });
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).send(e);
  }
};
