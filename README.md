## Project

CMS that includes semantic search via LLM.

This is just a proof of concept, not a production ready app.

## Features

- create embedding and save to ChromaDB on post create
- search embeddings to return post

e.g.: create posts about different dog breeds. Search for: what post is about
corgis. Post is returned as JSON.

## Overview

![Architecture Diagram](./docs/overview_search.svg)

## Setup

- start services w/ 'docker compose up'
- start next app separately: 'npm run dev' / build first and 'npm run start'
- set up WordPress with wizard (port 8080)
- create page and embed next.js app in WordPress, if localhost:

  ```html
  <iframe
    src="http://localhost:3000"
    width="100%"
    height="600"
    style="border:none;"
  ></iframe>
  ```

- tunnel next app w/ e.g. ngrok (port 3000)
- install WP Webhooks and add webhook on post create to NEXT_APP_URL/api/add-post
- create a couple of posts, make sure they are received via ngrok tunnel and embedding is saved to ChromaDB
- go to next.js iframe page on WordPress and search for articles
