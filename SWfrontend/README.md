# Starting the project:

1. Run `npm i` in both SWFrontend and SWBackend
2. Start the backend on localhost by running `npm run build` than `npm run start`
3. Change directory to SWFrontend and run `npx vite dev --mode locale`
4. You can load the project by navigating to `http://127.0.0.1:5173/SW/`
5. Cypress headless component test start: `npx cypress run --component`
6. PW test running: `npm run test` or `$env:ENV="pipe"; npm run test`

finish cucumber tests in ./pw and fix the pipeline.