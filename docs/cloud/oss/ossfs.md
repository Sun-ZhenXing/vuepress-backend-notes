# OSSFs 挂载

[[TOC]]

## 1. 概述

下面使用 `Dockerfile` 用于构建 `ossfs` 镜像，`docker run` 启动容器并挂载 OSS。

@[code dockerfile](./src/Dockerfile)

构建镜像：

```bash
docker build -t ossfs \
  --build-arg OSS_ENDPOINT=oss-cn-shanghai.aliyuncs.com \
  --build-arg OSS_BUCKET=alexsun \
  --build-arg OSS_ACCESS_KEY_ID=xxx \
  --build-arg OSS_ACCESS_KEY_SECRET=xxx \
  .
```

启动容器：

```bash
docker run -it \
  --name oss \
  --privileged=true \
  -p 8000:8000 \
  ossfs
```
