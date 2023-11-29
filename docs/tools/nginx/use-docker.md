# 使用 Docker 部署 Nginx

[[TOC]]

## 1. 常见标签

| 标签             | 容器环境         |
| ---------------- | ---------------- |
| `latest`         | 最新版本         |
| `mainline*`      | 主线版本         |
| `stable*`        | 稳定版本         |
| `*alpine*`       | Alpine           |
| `*bullseye*`      | Debian 11        |
| `*bullseye-perl` | Debian 11 + Perl |
| `*alpine*-perl`  | Alpine + Perl    |
| `*alpine*-slim`  | Alpine 最小版本  |

如果不需要任何插件或扩展，而只使用配置文件部署 Nginx，可以直接使用 `nginx:stable-alpine-slim` 系列镜像，这些是体积最小的镜像，通常不含有其他依赖。

## 2. 示例

拉取镜像：

```bash
docker pull nginx:1.25.3-alpine3.18-slim
```

示例 `Dockerfile` 文件：

```dockerfile
FROM nginx:1.25.3-alpine3.18-slim

WORKDIR /usr/share/nginx/html/docs/

COPY $PWD/dist/ ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```
