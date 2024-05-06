# 1. 编程规约

[[TOC]]

## 1.1 命名风格

1. *@force* 所有编程相关的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。
    - *@negative* `_name` / `__name` / `$Object` / `name_` / `name$` / `Object$`
2. *@force* 所有编程相关的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。
    - *@note* 正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用。
    - *@positive* `ali` / `alibaba` / `taobao` / `kaikeba` / `aliyun` / `youku` / `hangzhou` 等国际通用的名称，可视同英文。
    - *@negative* `DaZhePromotion`【打折】/ `getPingfenByName()`【评分】 / `String fw`【福娃】/ `int 变量名 = 3`
3. *@force* 代码和注释中都要避免使用任何人类语言中的种族歧视性或侮辱性词语。
    - *@positive* `blockList` / `allowList` / `secondary`
    - *@negative* `blackList` / `whiteList` / `slave` / `SB` / `WTF`
4. *@force* 类名使用 UpperCamelCase 风格，以下情形例外：`DO` / `PO` / `DTO` / `BO` / `VO` / `UID` 等。
    - *@positive* `ForceCode` / `UserDO` / `HtmlDTO` / `XmlService` / `TcpUdpDeal` / `TaPromotion`
    - *@negative* `forcecode` / `UserDo` / `HTMLDto` / `XMLService` / `TCPUDPDeal` / `TAPromotion`
5. *@force* 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格。
    - *@positive* `localValue` / `getHttpMessage()` / `inputUserId`
6. *@force* 常量命名应该全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。
    - *@positive* `MAX_STOCK_COUNT` / `CACHE_EXPIRED_TIME`
    - *@negative* `MAX_COUNT` / `EXPIRED_TIME`
7. *@force* 抽象类命名使用 `Abstract` 或 `Base` 开头；异常类命名使用 `Exception` 结尾，测试类命名以它要测试的类的名称开始，以 `Test` 结尾。
8. *@force* 类型与中括号紧挨相连来定义数组。
    - *@positive* 定义整形数组 `int[] arrayDemo`。
    - *@negative* 在 `main` 参数中，使用 `String args[]` 来定义。
9. *@force* POJO 类中的任何布尔类型的变量，都不要加 `is` 前缀，否则部分框架解析会引起序列化错误。
    - *@note* 本文 MySQL 规约中的建表约定第 1 条，表达是与否的变量采用 `is_xxx` 的命名方式，所以需要在 `<resultMap>` 设置从 `is_xxx` 到 `xxx` 的映射关系。
    - *@negative* 定义为布尔类型 `Boolean isDeleted` 的字段，它的 `getter` 方法也是 `isDeleted()`，部分框架在反向解析时，“误以为” 对应的字段名称是 `deleted`，导致字段获取不到，得到意料之外的结果或抛出异常。
10. *@force* 包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用单数形式，但是类名如果有复数含义，类名可以使用复数形式。
    - *@positive* 应用工具类包名为 `com.alibaba.ei.kunlun.aap.util`；类名为 `MessageUtils`（此规则参考 Spring 的框架结构）。
11. *@force* 避免在子父类的成员变量之间、或者不同代码块的局部变量之间采用完全相同的命名，使可理解性降低。

## 1.2 常量定义

## 1.3 代码格式

## 1.4 OOP 规约

## 1.5 日期时间

## 1.6 集合处理

## 1.7 并发处理

## 1.8 控制语句

## 1.9 注释规约

## 1.10 前后端规约
