FROM amazoncorretto:11.0.6
COPY target/divers-logbook-1.0-SNAPSHOT.jar .
ENTRYPOINT ["java","-jar", "/divers-logbook-1.0-SNAPSHOT.jar"]
