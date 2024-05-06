# try_files 指令

[[TOC]]

## 实例

尝试返回文件/文件夹，如果不存在就重定向到二级目录下的 `index.html` 文件，如果不存在则重定向到根目录下的 `index.html` 文件。

```nginx
server {
    listen 80;
    server_name example.com;
    root /path/to/your/website;

    location / {
        try_files $uri $uri/ $uri/index.html @secondary;
    }

    location @secondary {
        rewrite ^/([^/]+)/.*$ /$1/index.html last;
        try_files $uri /index.html;
    }
}
```
