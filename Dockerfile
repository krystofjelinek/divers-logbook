FROM openjdk:16-jdk-alpine
COPY target/* divers-logbook-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "/divers-logbook-1.0-SNAPSHOT.jar"]
