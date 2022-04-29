# Project Name

Authors: Jon Rumsey and Raul Zarate
Version: 2.0.0

## Overview

A Imitation of HTTP requests from backened to client. This will have data passed to MongoDB and will send back to server.

## Getting Started

1. Install node (version 12+ preferred). Use `node --version` to confirm.  
1. Install npm and update to version 8+. Use `npm --version` to confirm.  
1. Clone this repository and the backend repository from [Raul Zarate GitHub](https://github.com/zaratr). Keep front-end and back-end repositories separate on your local git.  
1. Copy `.env.sample` to new file `.env` in root and update with your MongoDB connection string via [cloud.mongodb.com](https://cloud.mongodb.com) and the PORT you want the server to run on (default 3001).  
1. Run `npm install` in the root to install and update node_modules.  
1. SEED your database using `npm run ./seed.js` to put some dummy data into the mongodb in the sky.  
1. Run `nodemon` to launch the server.  

## Architecture

Server > Seed > BookModel

## Change Log

v.2.0.0: Implemented GET single and DELETE single by ID routes and functions. Minor bug fixes.  

v.1.0.0: Implemented server.js with Mongoose, a seed.js module, and a GET route to return all boooks stored in db.  

## Estimates

Time Estimates: For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

### Create and Delete - Backend

Estimate of time needed to complete: 3 hours

Start time: 1300

Finish time: 1600

Actual time needed to complete: 3

Lead BE Developer: Jon [Rumsey](https://github.com/nojronatron)  

### Read of CRUD

Estimate of time needed to complete: 3 hours

Start time: 1200

Finish time: 1500

Actual time needed to complete: 3

### User Authentication

Estimate of time needed to complete: 3 hours

Start time: 1200

Finish time: 1500

Actual time needed to complete: 3

Lead BE Developer: Raul [Zarate](https://github.com/zaratr)  

## Credit and Collaborations

Paul Zarate [github](https://github.com/zaratr)  
Jon Rumsey [github](https://github.com/nojronatron)  
