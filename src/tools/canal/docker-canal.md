# Docker 中使用 Canal

[[TOC]]

## 1. MySQL 配置

检查是否开启了 binlog：

```sql
SHOW VARIABLES LIKE 'log_bin';
```

添加如下配置到 `my.cnf` 文件中：

```properties
[mysqld]
server_id=1
log_bin = mysql-bin
binlog_format = ROW
```

重启 MySQL，此时 MySQL 已经开启了 binlog。

## 2. Canal 配置

启动 Canal Server：

```bash
docker run -d \
    -p 11111:11111 \
    --name canal-server \
    -e canal.auto.scan = true \
    -e canal.destinations = example \
    -e canal.instance.master.address = \
    -e canal.instance.dbUsername = root \
    -e canal.instance.dbPassword = 123456 \
    -e canal.instance.connectionCharset = UTF-8 \
    -e canal.instance.tsdb.enable = true \
    -e canal.instance.gtidon = false \
    -e canal.instance.auto.scan = true \
    -e canal.instance.auto.scan.interval = 5 \
    -e canal.instance.filter.regex = .*\\..* \
    -e canal.instance.filter.black.regex = (mysql\\.slave_.*|.*\\_bak) \
    -e canal.instance.tsdb.url = jdbc:mysql:// \
    -e canal.instance.tsdb.dbUsername = canal
    canal/canal-server:v1.1.7
```

容器内的 `/home/admin/canal-server/conf/example/instance.properties` 文件即为示例文件。
