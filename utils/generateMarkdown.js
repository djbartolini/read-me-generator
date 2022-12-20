// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return licenseBadge = '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
    case 'MIT':
      return licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Creative Commons':
      return licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
    case 'Eclipse Public License':
      return licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
    case 'None':
      return licenseBadge = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
    case 'MIT': 
      return licenseLink = '(https://opensource.org/licenses/MIT)'
    case 'Creative Commons':
      return licenseLink = '(http://creativecommons.org/publicdomain/zero/1.0/)'
    case 'Eclipse Public License':
      return licenseLink = '(https://opensource.org/licenses/EPL-1.0)'
    case 'None':
      return licenseBadge = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
