# Diver's logbook

This web application (program) is an example of digitization of paper logbook for scuba diving.
The app is running on Spring Boot. Front-end is done with Vaadin Flow (v14) framework and MongoDB is used as a database.

## Running the application in Docker
1. Pull an image of MongoDB from [Docker Hub](https://hub.docker.com/_/mongo): `docker pull mongo:5.0.3`
2. Pull an image of the application itself: `docker pull krystofjelinek/divers-logbook-1`
3. Use the `docker-compose.yaml` included in this repository to run both containers correctly.
   Download zip file of this project and unarchive it.
   Open terminal and navigate to the extracted divers-logbook folder.
   Run this command: `docker-compose up`

Open http://localhost:8080 in your browser.


## Running the application in an IDE

You can also import the project to your IDE of choice as you would with any
Maven project. Just drag and drop the `pom.xml` file into your favorite IDE and all of the dependencies will download on their own.
Before running the application in your IDE, you must run MongoDB container.
To do that, you have get [Docker Desktop](https://docs.docker.com/desktop/) and follow these steps:
1. Pull mongoDB image from [Docker Hub](https://hub.docker.com/_/mongo): `docker pull mongo:5.0.3`
2. Create a Docker container from the image using: `docker run -p 27017:27017 mongo:5.0.3 `

Open http://localhost:8080 in your browser.


### Useful links for learning technology used in this project
| [Docker docs](https://docs.docker.com/)
| [MongoDB docs](https://www.mongodb.com/docs/)
| [Vaadin Flow](https://vaadin.com/flow)
