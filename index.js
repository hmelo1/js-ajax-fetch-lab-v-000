function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/${repo}/forks')
    .then(res => res.json())
    .then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '9514e7659812c4aa5efcbeee3fd6ff7e5b9045f7'
}

const token = 'YOUR_TOKEN_HERE';
const postData = {
  body: 'Great stuff'
};

fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => console.log(res));
