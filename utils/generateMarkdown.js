
//Renders the license Icon that is used
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } 
}

//renders the link in the table of contents
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return ` * [License](#license)`;
}

//renders the license section 
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else if (license === "Apache 2.0") {

  } else if (license === "MIT") {
    
  } else if (license === "GNU GPL v3") {

  } else if (license === "IBM") {

  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
* ${data.desc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}


## Installation
* ${data.install}

## Usage
* ${data.usage}

## Contribution
* ${data.contribution}

## Tests
* ${data.tests}

## Questions

Please reach out with any questions you may have

* Github: [Github:${data.userName}](https://www.github.com/${data.userName})

* Email: [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
