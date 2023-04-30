# MIME 类型

[[TOC]]

## 1. 常见 MIME 类型

| 文件扩展名       | MIME 类型                      | 描述            |
| ---------------- | ------------------------------ | --------------- |
| `.html` / `.htm` | `text/html`                    | HTML 文档       |
| `.css`           | `text/css`                     | CSS 文档        |
| `.js`            | `text/javascript`              | JavaScript 文档 |
| `.gif`           | `image/gif`                    | GIF 图片        |
| `.jpg` / `.jpeg` | `image/jpeg`                   | JPEG 图片       |
| `.webp`          | `image/webp`                   | WebP 图片       |
| `.png`           | `image/png`                    | PNG 图片        |
| `.svg`           | `image/svg+xml`                | SVG 图片        |
| `.tiff`          | `image/tiff`                   | TIFF 图片       |
| `.ico`           | `image/x-icon`                 | ICO 图标        |
| `.txt`           | `text/plain`                   | 纯文本文档      |
| `.json`          | `application/json`             | JSON 文档       |
| `.xml`           | `application/xml` / `text/xml` | XML 文档        |
| `.pdf`           | `application/pdf`              | PDF 文档        |
| `.bin`           | `application/octet-stream`     | 二进制文件      |
| `.woff`          | `font/font-woff`               | WOFF 字体       |
| `.woff2`         | `font/font-woff2`              | WOFF2 字体      |
| `.ttf`           | `font/ttf`                     | TTF 字体        |
| `.otf`           | `font/otf`                     | OTF 字体        |

## 2. Nginx 配置 MIME 类型

如果你的网站使用了 Nginx 默认不识别的文件类型，那么你需要在配置文件中添加对应的 MIME 类型。

如果配置不正确，浏览器会可能无法正确识别文件类型：`Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type`。

大部分常用的 MIME 类型已经被默认支持，如果需要，记得引入 `mime.types` 文件：

```nginx
http {
    include /etc/nginx/mime.types;

    # ...
}
```

在 Debian/Ubuntu/Alpine 等系统中，`mime.types` 文件的路径为 `/etc/nginx/mime.types`。
