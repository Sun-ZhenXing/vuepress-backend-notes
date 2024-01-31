# FRP 获取真实 IP

[[TOC]]

## 1. HTTP 代理

使用 HTTP 代理时，可以通过 `X-Forwarded-For` 头部获取真实 IP。但是由于 HTTP 代理不够灵活，我们一般直接使用 TCP 代理。

## 2. TCP 代理

FRP 支持通过 Proxy Protocol 协议来传递经过 FRP 代理的请求的真实 IP，此功能支持所有以 TCP 为底层协议的类型，不支持 UDP。[^1]

[^1]: 获取用户真实 IP，FRP 文档，<https://gofrp.org/zh-cn/docs/features/common/realip/>

通过指定 `proxyProtocolVersion` 可以开启 Proxy Protocol，下面是配置示例：

```toml
serverAddr  = {{ .Envs.FRP_SERVER_ADDR }}
serverPort  = {{ .Envs.FRP_SERVER_PORT }}
token       = {{ .Envs.FRP_SERVER_TOKEN }}

[app]
type        = "tcp"
remotePort  = 4090
localIp     = {{ .Envs.APP_HOST }}
localPort   = 4090
proxyProtocolVersion = "v2"
```

Nginx 支持 Proxy Protocol，可以通过 `proxy_protocol` 指令来开启。

在 `listen` 指令中添加 `proxy_protocol` 参数，然后在 `location` 指令中添加 `proxy_set_header` 指令来设置 `X-Real-IP` 和 `X-Forwarded-For` 头部。

```nginx{6,23,24}
http {

    # ...

    server {
        listen      4090 proxy_protocol;
        server_name www.demo.com;
        client_max_body_size 128m;

        location / {
            root   /usr/share/nginx/html;
            try_files $uri $uri/ @router;
            index  index.html index.htm;
        }

        location @router {
            rewrite ^.*$ /index.html last;
        }

        location ^~ /api/ {
            proxy_pass  http://127.0.0.1:8080/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $proxy_protocol_addr;
            proxy_set_header X-Forwarded-For $proxy_protocol_addr;
        }
    }
}
```
