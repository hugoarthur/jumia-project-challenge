# Jumia Project Challenge
This is just a simple project as a challenge to the company Jumia. The main object of the project is to load a CSV file in Service-A and persist it in Service-B and load some information based on this CSV file.

## Project Structure
- The project was designed with two microservice. The microservice Service-A, for loading the CSV, and the microservice Service-B, for insert the information of order inside a DB. The `docker-compose.yml` file helps to run the project with containers inside a docker environment.

## Tools
 - Docker
 - Node.js (all information on the Dockerfile file of each service)
 - MongoDB
 - Jest (for unit tests)

### Main Folders

´´´
project 
└─── docker-compose.yml - File configuration for the project docker images
└─── service-A
|   └─── app
|   |   └─── controllers
|   |   └─── integration - Folder for files with integration. For example RestAPI calls to service-b
|   |   └─── routes
|   |   └── services - Folder for files representing the business logic.
|   └─── Dockerfile - Service-A DockerFile
|   └─── index.js - Main file
└─── service-B
│   └───app
│   │   └─── controllers
│   │   └─── models - Folder for files for persistence.
│   │   └─── routes
│   │   └─── service - Folder for files representing the business logic.
│   └─── Dockerfile - Service-B DockerFile
│   └─── helper - Folder for files that are helpers/utils
│   └─── index.js - Main file
│   └─── tests - Folder for test files
´´´
## To Run (locally)
1. Set a .env file for each service. With configuration similar to the `docker-compose.yml`.
1. Run `npm install` from this repository to get the required libs.
1. Run `npm start` to run the project and see the result of challenge.

### To Run Tests
 - Run `npm test` to run scenarios of unit tests for the `service-b`.

 ## Notes
  - I was not able to load large CSV files, because I was struggling when using `createInputStream`, since it was breaking the file in the middle of the row. :(
  - I could have made scenarios of testing for the `service-a`, specially for the load CSV file function.
  - Unfortunately, I did not had so much time to do it, so I did my best...
