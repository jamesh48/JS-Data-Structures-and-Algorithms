const { exec } = require('child_process');

const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ stdout, stderr });
    });
  });
};

const updateStats = async () => {
  // Update Stats
  await executeCommand('npm run stats');
  await executeCommand('git add ./leetcode/README.md');
  await executeCommand('git commit -m "update-stats"');
  return;
};

(async () => {
  const command = 'git status --porcelain';
  const { stdout, stderr } = await executeCommand(command);
  const leetcodeSubmissions = stdout
    .split('\n')
    .filter((x) => x.startsWith('?? leetcode'));
  const toCommit = leetcodeSubmissions.map((submission) => {
    return submission.split('?? ')[1];
  });
  console.log(toCommit);
  if (!toCommit.length) {
    await executeCommand('git add .');
    await executeCommand('git commit -m "generic update"');
    await executeCommand('git push');
    process.exit(0);
  }
  await Promise.all(
    toCommit.map(async (commitMsg) => {
      await executeCommand(`git add ${commitMsg}`);
      await executeCommand(`git commit -m ${commitMsg}`);
    })
  );
  await updateStats();
  await executeCommand('git push');
})();
