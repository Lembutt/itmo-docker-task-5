# Инструкция

## Установка и запуск:

```bash
docker pull lembutt/itmo-docker-task-5:latest
docker run -p 33722:8080 lembutt/itmo-docker-task-5:latest
```

## Тестирование:

```bash
curl localhost:33722
curl localhost:33722/stat
curl localhost:33722/about
```

This [image](https://hub.docker.com/repository/docker/lembutt/itmo-docker-task-5) on Docker Hub