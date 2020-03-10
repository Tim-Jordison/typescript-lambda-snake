# Typescript Lambda Snake
Based off of https://github.com/Giftbit/sam-scaffold

Implements a simple CRUD REST API using [Cassava](https://github.com/Giftbit/cassava/).

## Deploying
Building the project and managing the development account is easily done with the included script dev.sh. The script requires the aws cli installed and configured for a development account. For security reasons this should not be your production account. It also requires bash, which is a useful tool even on Windows.

Edit the top of dev.sh and replace STACK_NAME with a name that describes the project and replace BUILD_ARTIFACT_BUCKET with the name of an S3 bucket you have access to for build artifact storage.

These are the commands you can use...

    ./dev.sh build foo -- compile only the lambda function foo
    ./dev.sh deploy -- deploy the entire CloudFormation stack including all source code to the currently configured aws cli account.
    ./dev.sh upload foo -- only replace the the code for the lambda function foo.
    ./dev.sh invoke foo bar.json -- invoke and test the already deployed function foo with the input file bar.json.
    ./dev.sh delete -- delete the entire CloudFormation stack and all resources.

## Linting

Linting is running a program that checks the source code for potential style and logical problems.  The linter is set up to be run with: `npm run lint`.

Linting is provided by [TSLint](https://palantir.github.io/tslint/) in TypeScript.  Check out the documentation for adjusting the rules to suit your preferred style.

## Unit testing

Unit testing is provided by [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) and is run with: `npm run test`.
 
Test files are located next to the file being tested with the extension `.test.ts`.  eg: `index.ts` is beside test file `index.test.ts`.  Just like libraries not referenced by index.ts WebPack will not include these files in the distribution.
