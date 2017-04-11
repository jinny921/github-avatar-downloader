const request = require('request');
const fs = require('fs');
const dotenv = require('dotenv').config();
const repoOwner = process.argv[2];
const repoName = process.argv[3];
const GITHUB_USER = process.env.DB_USER;
const GITHUB_TOKEN = process.env.DB_TOKEN;

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
  //if avatar file doesn't exist, create the dir
  if (!fs.existsSync('./avatar/')) {
    fs.mkdir('./avatar');
  };
    request.get(url)
    //use pipe function to save the response images to the set path
    .pipe(fs.createWriteStream(filePath));
}

if (repoOwner && repoName) {
  getRepoContributors(repoOwner, repoName, jinnyCallback);
} else {
  console.log("Please put in two arguments in command line, first is the owner, second is the name");
}




