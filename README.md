# Weather App

[![Netlify Status](https://api.netlify.com/api/v1/badges/f433129e-e6d8-4292-898e-09d0fb931d7c/deploy-status)](https://app.netlify.com/sites/studebaker-weather/deploys)

View Completed Demo: https://studebaker-weather.netlify.app/

This repo contains the code for our in-class example of using getServerSideProps, useSWR, and API routes to fetch data from an external API with Next.js. 

To follow along, fork this repo, clone it to your local computer, and then run the following commands:
```bash
// get to starting branch
git checkout 1_static

// install dependencies
npm install

// start dev server
npm run dev
```

## API Key
We will be using this [free Weather API](https://www.weatherapi.com/api-explorer.aspx) to fetch location specific temperature data for our project. You will need to sign up for a free API key. 

Once you receive your API key, create a `.env.local` file in your root directory, and save the api key to a variable name like this:
```
WEATHER_API_KEY=xxxxxxxxxx
```
(replace the xxxxxx with whatever your actual key is)

This will keep your api key from being committed to git, and we will only reference it in your code by the environment variable name. We will use this only in `getServerSideProps` or API endpoints, so it will never be exposed on the client. This is generally considered best practice for using API keys when developing.

### Helpful Documentation
Stuck? Confused? Here's the documentation that is helpful for this project:
- [async Javascript functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
- [Getting Started with useSWR](https://swr.vercel.app/docs/getting-started)
- [Using useSWR with Next.js SSR](https://swr.vercel.app/docs/with-nextjs)
- [Introduction to Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Dynamic API Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes)
