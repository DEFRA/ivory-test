
# Prerequisites

Minimum Node.js v12.16.1 +
Recommended v14+

# Install

First clone the repo using:


`$ git clone` from https://github.com/DEFRA/ivory-test

Then from the root of the project folder:(ivory-acceptance-test)

`$ npm i`

This should install all dependacies etc

# Environment variables
# When running locally after code has been deployed to Test environment
 Set 'baseUrl' in wdio.conf.js to the correct local url

# Run the tests

Run tests from cli in root of project which Ivory-acceptance-tests

`$ npm run test`

This will run all tests, to specify suites or test cases, see wdio docs for more detail.

`$ npm run test -- --spec ./test-name.js`

This will run the specified spec file, rather than the entire set of tests

If running on local Windows machine then to run all tests:

`$ ./node_modules/.bin/wdio ./wdio.conf.js`

If running on local Wiindows machine but only want to run a specific test:

`$ ./node_modules/.bin/wdio run ./wdio.conf.js --spec test/testname`  e.g. where testname = common-test.js
