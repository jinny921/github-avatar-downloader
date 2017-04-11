const GITHUB_USER = "jinny921";
const GITHUB_TOKEN = "bafb585d2e313075a75f771f8d0dff7c4010813c";

const request = require('request');
const fs = require('fs');
const repoOwner = process.argv[2];
const repoName = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {
  const requestOptions = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'Jinny Macbook OSX v11.2'
    }
  };
  request.get(requestOptions, cb);
}

function jinnyCallback(err, result, body) {
  if (result) {
    const resultObject = JSON.parse(body);
    resultObject.forEach(function(element) {
      downloadImageByURL(element.avatar_url, `avatar/${element.login}.jpg`);
    });
  } else {
    console.log("it's an error!!!" + err.code);
  };

};

function downloadImageByURL(url, filePath) {
  request.get(url)
    .pipe(fs.createWriteStream(filePath));
}

if (repoOwner && repoName) {
  getRepoContributors(repoOwner, repoName, jinnyCallback);
} else {
  console.log("Please put in two arguments in command line, first is the owner, second is the name");
}






