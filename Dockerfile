FROM ubuntu:latest
LABEL authors="benni"

ENTRYPOINT ["top", "-b"]