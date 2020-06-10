# serverless-bolt-boilerplate

## Technology Stack

### Application

- Runtime Environment: [Node.js 12.x](https://nodejs.org/)
- Package Manager: [Yarn 1.x](https://classic.yarnpkg.com/)
- Programming Language Processor: [TypeScript 3.7.x](https://www.typescriptlang.org/)
- Web Application Framework: [Bolt 2.x](https://slack.dev/bolt-js/)

### Infrastructure

- [Amazon Route 53](https://aws.amazon.com/route53/)
- [Amazon API Gateway](https://aws.amazon.com/api-gateway/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [AWS Systems Manager](https://aws.amazon.com/systems-manager/)
- [Serverless Framework 1.x](https://serverless.com/)

## Getting Started

### Pre-Requisites

- [Docker Compose](https://docs.docker.com/compose/)
- [ngrok](https://ngrok.com/)

### Running the Application on Local

1. Make sure you add the env vars in `.env` file. Just copy the [`.env.template`](./.env.template) file.

    ```sh
    SLACK_SIGNING_SECRET=
    SLACK_BOT_TOKEN=
    ```

1. And then execute:

    ```sh
    # build Docker services
    docker-compose build

    # run containers
    docker-compose up # => `⚡️ Bolt app is running!`
    ```

### Testing

```sh
# unit tests
docker-compose run --rm app yarn run test

# end-to-end tests
docker-compose run --rm app yarn run test:e2e

# get the test coverage
docker-compose run --rm app yarn run test:cov
```

### Deployment

```sh
# deploy to DEV environment
docker-compose run --rm app yarn run deploy:dev
```

## Development Guideline

### Project Layout (Brief Explanation)

```
.
├── src
│  ├── views
│  ├── app.controller.ts
│  ├── index.ts
│  ├── lambda.ts
│  └── server.ts
├── .env
├── .eslintrc.yml
├── .prettierrc.yml
├── Dockerfile
├── docker-compose.yml
├── package.json
├── serverless.yml
└── tsconfig.json
```

### Tips

- When pulling updated [`Dockerfile`](./Dockerfile) or [`package.json`](./package.json):

    ```sh
    docker-compose build
    ```

- When publishing the [`Request URL`](https://slack.dev/node-slack-sdk/tutorials/local-development#what-is-a-request-url) from your local machine via [`ngrok`](https://ngrok.com/):

    ```sh
    ngrok http 3000 # check out https://slack.dev/bolt-js/tutorial/getting-started#setting-up-events for more information
    ```

- When running the application on local via [`Serverless Offline`](https://www.npmjs.com/package/serverless-offline):

    ```sh
    docker-compose run --rm --service-ports app yarn run start:dev:sls
    ```
