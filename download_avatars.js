const GITHUB_USER = "jinny921";
const GITHUB_TOKEN = "bafb585d2e313075a75f771f8d0dff7c4010813c";

const request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  // var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  console.log(requestURL);
}

getRepoContributors('jquery', 'jquery', (err, result) => {
  console.log(`Error: ${err}`);
  console.log(`Result: ${result}`);
})

