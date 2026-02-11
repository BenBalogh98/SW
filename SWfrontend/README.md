# Starting the project:

1. Run `npm i` in both SWFrontend and SWBackend
2. Start the backend on localhost by running `npm run build` than `npm run start`
3. Change directory to SWFrontend and run `npx vite dev --mode locale`
4. You can load the project by navigating to `http://127.0.0.1:5173/SW/`
5. Cypress headless component test start: `npx cypress run --component`

current plan: move backend to TS, reorganize things to folders/files, use dotenv, than work on starting the pipeline that produces a container at the end.

finish some basic cucumber tests in ./pw and fix the pipeline.