# Portfolio UI

This repository contains the frontend code for a portfolio application built with Create React App and TypeScript. The application serves as the user interface of a portfolio for a software engineer, featuring various sections:

- **Intro/Homepage**: Provides an introduction to the portfolio.
- **About**: Details about the software engineer.
- **Resume**: Contains sections for work experiences, skills, education, and certifications.
- **Projects**: Displays projects with filtering capabilities.
- **Contact**: Allows users to submit messages via a form.

## Running Locally

To run the application locally, follow these steps:

1. Clone this repository to your local machine using Git:

```bash
git clone https://github.com/iapurba/portfolio-ui
```

2. Navigate to the project directory:

```bash
cd portfolio-ui
```

3. Install dependencies using npm or yarn::

```bash
npm insall
```
or
```bash
yarn insall
```

4. Create a .env.development file in the root directory of the project and declare the following variables:

```dotevn
REACT_APP_SERVICE_DOMAIN=your_service_domain
REACT_APP_PROFILE_ID=your_profile_id

```
The profile id should be a valid MongoDB Object ID.
Replace your_service_domain and your_profile_id with the appropriate values. These variables are required to feed data to the application.

5. Start the development server:

```bash
npm start
```
or
```bash
yarn start
```

6. Open your web browser and navigate to http://localhost:3000 to view the application.

## Docker
This project also includes a Dockerfile for containerization. To build and run the Docker container, follow these steps:

1. Build the Docker image:

```bash
docker build -t portfolio-ui .
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 portfolio-ui
```

Open your web browser and navigate to http://localhost:3000 to view the application running inside the Docker container.

This project requires approprate data to run it successfully. To set up the backend kindly follow the below repository. 

[https://github.com/iapurba/portfolio-api](https://github.com/iapurba/portfolio-api)

If you need assistance or would like me to set up the data for you, feel free to contact me at [apurbapanja1@gmail.com].

Thank You! 🙏🏼

## Create React App Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
