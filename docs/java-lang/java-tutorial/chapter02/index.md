# 2. Java 基础语法

## 2.1 Java 标识符

Java 有哪些关键字？

*@TODO* <!-- https://www.runoob.com/java/java-basic-syntax.html -->

Java 标识符的要求：

- 所有的标识符都应该以字母（`A-Z` 或者 `a-z`），美元符（`$`）、或者下划线（`_`）开始
- 首字符之后可以是字母（`A-Z` 或者 `a-z`），美元符（`$`）、下划线（`_`）或数字（`0-9`）的任何字符组合
- 关键字不能用作标识符
- 标识符是大小写敏感的

## 2.2 数据类型

Java 是强类型语言：要求变量的使用要严格符合规定，所有的变量必须先定义才能使用。

Java 的数据分为两大类：

- **基本类型**（Primitive Type）
  - 数值类型
    - 整数类型
      - `byte`，1 个字节
      - `short`，2 个字节
      - `int`，4 个字节
      - `long`，8 个字节
    - 浮点类型
      - `float`，4 个字节
      - `double`，8 个字节
    - 字符类型
      - `char`，2 个字节
  - 布尔类型
    - `boolean` 类型，占 1 位
- **引用类型**（Reference Type）
  - 类
  - 接口
  - 数组

## 2.3 类型转换

*@TODO* 详细讲解。

## 附录：易错类型讲解

注意看下面的代码：

```java
public class Hello {
    public static void main(String[] args) {
        float f = 0.1f;
        double d = 1.0 / 10;
        System.out.println(f == d);

        float f1 = 1241234124134123f;
        float f2 = f1 + 1;
        System.out.println(f1 == f2);
    }
}
```

最后输出结果为：

```java
false
true
```

我们再看下面的 `String` 类型示例：

```java
public class Hello {
    public static void main(String[] args) {
        String s1 = new String("hello");
        String s2 = new String("hello");
        System.out.println(s1 == s2);  // false

        String s3 = "hello";
        String s4 = "hello";
        System.out.println(s3 == s4);  // true
    }
}
```

这是引用类型和值类型的比较问题。
