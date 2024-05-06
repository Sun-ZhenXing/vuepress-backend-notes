# GraalVM 入门

本文参考了 [GraalVM 官方文档](https://www.graalvm.org/latest/reference-manual/native-image/guides/containerise-native-executable-and-run-in-docker-container/)。

[[TOC]]

## 1. 安装

首选我们需要下载并安装 [GraalVM](https://www.graalvm.org/downloads/)，这里选择 GraalVM 21.0.2。

或者使用命令安装：

```bash
sdk install java 21.0.2-graal
```

## 2. 运行示例

克隆示例项目：

```bash
git clone https://github.com/graalvm/graalvm-demos
cd graalvm-demos/spring-native-image
```

Windows 下的构建脚本：

```bat
call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"

set JAVA_HOME=D:\Program\graalvm-jdk-21.0.2+13.1
set PATH=%PATH%;D:\Program\graalvm-jdk-21.0.2+13.1\bin
./mvnw native:compile -Pnative
```

::: details Windows 构建错误

1. `Error: On Windows, GraalVM Native Image for JDK 21 requires Visual Studio 2022 version 17.1.0 or later (C/C++ Optimizing Compiler Version 19.31 or later).`
    1. 需要安装 [Visual Studio 2022](https://visualstudio.microsoft.com/)
    2. 仿照上面的命令，执行 `vcvars64.bat`，然后再执行构建命令
2. `Native-image building on Windows currently only supports target architecture: AMD64 (?? unsupported)`
    1. 将 Windows 的字符集修改为 `UTF-8`，然后重启系统（在 **时间和语言** -> **语言和区域** -> **管理语言设置** -> **更改系统区域设置** 下启用 UTF-8 即可）

:::

Linux 下的构建脚本：

```bash
./mvnw native:compile -Pnative
```

构建成功后执行：

```bash
./target/benchmark-jibber
```

测试：

```bash
curl http://localhost:8080/jibber
```

## 3. 使用 Docker 部署

使用多阶段构建，将下面的内容保存为 `Dockerfile`：

```dockerfile
FROM container-registry.oracle.com/graalvm/native-image:21-ol8 AS builder

WORKDIR /build

COPY . /build

RUN ./mvnw --no-transfer-progress native:compile -Pnative

FROM container-registry.oracle.com/os/oraclelinux:8-slim

EXPOSE 8080

COPY --from=builder /build/target/benchmark-jibber app

CMD ["/app"]
```

构建镜像：

```bash
docker build -t benchmark-jibber .
```

运行容器：

```bash
docker run -it --rm -p 8080:8080 benchmark-jibber
```

再次执行测试：

```bash
curl http://localhost:8080/jibber
```
