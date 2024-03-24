const fs = require('fs').promises;

(async () => {
  const easyJSFiles = await fs.readdir('./javascript/solved/easy');
  const mediumJSFiles = await fs.readdir('./javascript/solved/medium');
  const hardJSFiles = await fs.readdir('./javascript/solved/hard');

  const data = `## Leetcode Stats
###### JS Easy Solved: ${easyJSFiles.length}
###### JS Medium Solved: ${mediumJSFiles.length}
###### JS Hard Solved: ${hardJSFiles.length}`;
  await fs.writeFile('./README.md', data, 'utf-8');

  console.log(data.replaceAll('#', ''));
})();
