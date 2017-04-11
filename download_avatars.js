const GITHUB_USER = "jinny921";
const GITHUB_TOKEN = "bafb585d2e313075a75f771f8d0dff7c4010813c";

const request = require('request');
const fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var requestOptions = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'Jinny Macbook OSX v11.2'
    }
  };
  // console.log(requestURL);

  request.get(requestOptions, cb);
}

function jinnyCallback(err, result, body) {
  if (result) {
    console.log(body);// do stuff with result
  } else {
    console.log("it's an error!!!" + err.code);
  }

}

getRepoContributors('jquery', 'jquery', jinnyCallback)