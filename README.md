## Project

CMS that includes semantic search via LLM.

Still work in progress

## Features

- dockered WordPress
- next.js UI that renders as iframe in WordPress
- next.js use cases:
  - create embedding for post
  - search all posts and return post link

## Overview

![Architecture Diagram](./docs/overview_search.svg)

## Setup

- npm install
- npm run build and start or npm run dev
- docker compose up for WordPress
- set up WordPress with wizard (port 8080)
- create site and embed next.js app in WordPress, if localhost: '<iframe src="http://localhost:3000" width="100%" height="600" style="border:none;"></iframe>'
