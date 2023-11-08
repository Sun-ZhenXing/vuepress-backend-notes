# 1. Java 语言概述

[[TOC]]

## 1.1 历史

在 1972 年，C 语言就诞生了，但直到 1995 年 Java 才问世，我们先说说 C 语言的一些特点：

1. 贴近硬件，运行极快，效率极高
2. 应用于操作系统、编译器、数据库和网络系统等
3. 使用指针和手动内存管理

1982 年 C++ 诞生：

1. 面向对象
2. 兼容 C 语言
3. 通用编程语言
4. 多应用于图形领域、游戏等

由于 C++ 的一些特征晦涩难懂，严重依赖平台和编译器实现，因此我们迫切需要一门语言：

- 语法像 C
- 没有指针
- 自动内存管理
- 真正编写一次，到处运行
- 面向对象
- 类型安全
- 拥有高质量的类库

1995 年的网页简单而粗糙，Java 的 Applet 带来了生机。于是 Java 成为了那个时代最好的语言，并持续流行了 30 年：

- Java 2 SE：桌面
- Java 2 ME：移动端
- Java 2 EE：服务器

许多基于 Java 的平台和中间件、工具：

- 构建工具：Ant、Maven、Jekins
- 服务器：Tomcat、Jetty、Jboss、Websphere、weblogic
- Web 开发：Structs、Spring、Hibernate、MyBatis
- 开发工具：Eclipse、NetBeans、Intellij Idea、Jbuilder

有一些应用服务器展示了网络开发的标准：

- 高性能
- 高可用
- 高并发

跨时代的作品：

- Hadoop，2006
- Android，2008

## 1.2 语言特性

Java 的特性和优势：

- 简单性
- 面向对象
- 可移植性
- 高性能
- 分布式
- 动态性
- 多线程
- 安全性
- 健壮性

## 1.3 发行版本

几个概念：

- JDK：Java Development Kit
- JRE：Java Runtime Environment
- JVM：Java Virtual Machine

Java 语言：

- Java 语言
- 工具和 APIs
  - java
  - javac
  - javadoc
  - apt
  - jar
  - javap
  - JPDA
  - JConsole
  - Java VisualVM
  - Security
  - Int'I
  - RMI
  - IDL
  - Deploy
  - Monitoring
  - Troubleshoot
  - Scripting
  - JVM TI
- RIAs
  - Java Web Start
  - Applet / Java Plug-in
- 用户界面工具包
  - AWT
    - Accessibility
    - Drag n Drop
  - Swing
    - Input Methods
    - Image I/O
  - Java 2D
    - Print Service
    - Sound
- 集成库
  - IDL
  - JDBC
  - JNDI
  - RMI
  - RMI-IIOP
  - Scripting
- 其他基准库
  - Beans
  - Intl Support
  - I/O
  - JMX
  - JNI
  - Math
  - Networking
  - Override Mechanism
  - Security
  - Serialization
  - Extension Mechanism
  - XML JAXP
- 语言和工具标准库
  - lang & util
  - Collections
  - Concurrency Utilities
  - Jar
  - Logging
  - Management
  - Preferences API
  - Ref Objects
  - Reflection
  - Regular Expression
  - Versioning
  - Zip
  - Instrumentation
- JVM
  - Java Hotspot Client ans Server VM

*@TODO* 插入图片

## 1.4 安装开发环境

这里使用的环境为：

- Java 1.8+
- IntelliJ IDEA

我们可以测试 `Hello.java` 是否能正常运行：

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

在命令行编译并运行：

```bash
javac Hello.java
java Hello
```

## 1.5 编码习惯

变量方法、类名可遵循驼峰命名。

好的程序需要善于使用各种注释，Java 注释有下面几种：

- 单行注释（`// ...`）
- 多行注释（`/* ... */`）
- 文档注释（`/** ... @xxx ... */`）

JDK 7 的数字支持下划线分割：

```java
int money = 10_000_000;
```

常见的文档注释内容：

| 表示           | 含义 |
| -------------- | ---- |
| `@Description` | 描述 |
| `@Author`      | 作者 |
