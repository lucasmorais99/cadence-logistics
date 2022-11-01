<h1 align="center"><img style="height: 100px" src="./assets/logo.svg"></img></h1>

<h5 align="center"> Start Date: 25th October, 2022.</h5>

<br>

This is a repository holding the code for the website of the (concept) company Cadence Logistics, a company focused on getting your goods from here to there, in record time.

## 🚀 Production

You can see the live version of the site [here](http://cadence-inc.vercel.app).

## 🎨 Design

The corresponding design for the layout of the site is hosted on Figma [at this link](https://www.figma.com/file/WssPJIGc55Ulwcer2iQ35T/Cadence?node-id=82%3A623).

## 🤖 Tech Stack

-  A large portion of the code is written in **Typescript**.
-  The project makes use of **Vue**, and relies heavily on Vue 3 and the Composition API.
-  The testing framework used in this project in **Vitest**, and the test suite can be run with the `test` script in the `package.json` file.
-  This project also uses the **GSAP** animation library.
-  The build tool for this project is **Vite**.

## 🤍 Development and Contribution

To get started, open a terminal and run the following commands one after the other:

```shell
git clone http://github.com/adebola-io/cadence.git
cd cadence
npm install
npm run dev
```

The last command should start a development server at `localhost:5173`.

> `NOTE`: The dev server may not work in versions of Node.js lower than 18, due to the core module prefix. If that error occurs, simply go to the `vite.config.ts` file and replace:
>
> ```js
> import path from "node:path";
> ```
>
> with:
>
> ```js
> import path from "path";
> ```