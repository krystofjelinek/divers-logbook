FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD target/divers-logbook-1.0-SNAPSHOT.jar app.jar
#COPY target/divers-logbook-1.0-SNAPSHOT.jar .
#CMD mvn spring-boot:run -Dactive.spring.profiles=production
ENTRYPOINT ["java","-jar", "/app.jar"]
