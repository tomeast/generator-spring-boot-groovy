#!/bin/sh

gradle clean build --stacktrace && java -jar build/libs/<%= projectName %>-0.1.0.jar
