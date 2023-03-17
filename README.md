# Diver's logbook

This web application (program) is an example of digitization of paper logbook for scuba diving.
The app is running on Spring Boot. Front-end is done with Vaadin Flow (v14) framework and MongoDB is used as a database.

## Running the application in Docker


http://localhost:8080 in your browser.

## Running the application in an IDE

You can also import the project to your IDE of choice as you would with any
Maven project. Just drag and drop the `pom.xml` file into your favorite IDE and all of the dependencies will download on their own.
Before running the application, you must run MongoDB container.
To do that, you have get [Docker Desktop](https://docs.docker.com/desktop/) and follow these steps:
1. Pull mongoDB image from [Docker Hub](https://hub.docker.com/_/mongo): `docker pull mongo:5.0.3`
2. Create a Docker container from the image using: `docker run -p 27017:27017 mongo:5.0.3 `


## Deploying to Production

To create a production build, call `mvnw clean package -Pproduction` (Windows),
or `./mvnw clean package -Pproduction` (Mac & Linux).
This will build a JAR file with all the dependencies and front-end resources,
ready to be deployed. The file can be found in the `target` folder after the build completes.

Once the JAR file is built, you can run it using
`java -jar target/divers-logbook-1.0-SNAPSHOT.jar`

## Project structure

- `MainView.java` in `src/main/java` contains the navigation setup (i.e., the
  side/top bar and the main menu). This setup uses
  [App Layout](https://vaadin.com/components/vaadin-app-layout).
- `views` package in `src/main/java` contains the server-side Java views of your application.
- `views` folder in `frontend/` contains the client-side JavaScript views of your application.
- `themes` folder in `frontend/` contains the custom CSS styles.

## Useful links

- Read the documentation at [vaadin.com/docs](https://vaadin.com/docs).
- Follow the tutorials at [vaadin.com/tutorials](https://vaadin.com/tutorials).
- Watch training videos and get certified at [vaadin.com/learn/training](https://vaadin.com/learn/training).
- Create new projects at [start.vaadin.com](https://start.vaadin.com/).
- Search UI components and their usage examples at [vaadin.com/components](https://vaadin.com/components).
- Discover Vaadin's set of CSS utility classes that enable building any UI without custom CSS in the [docs](https://vaadin.com/docs/latest/ds/foundation/utility-classes). 
- Find a collection of solutions to common use cases in [Vaadin Cookbook](https://cookbook.vaadin.com/).
- Find Add-ons at [vaadin.com/directory](https://vaadin.com/directory).
- Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/vaadin) or join our [Discord channel](https://discord.gg/MYFq5RTbBn).
- Report issues, create pull requests in [GitHub](https://github.com/vaadin/platform).
