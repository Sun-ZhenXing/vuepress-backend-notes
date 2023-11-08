FROM ubuntu:22.04

ENV OSSFS_URL=https://gosspublic.alicdn.com/ossfs/ossfs_1.91.1_ubuntu22.04_amd64.deb
ENV OSS_ENDPOINT=oss-cn-hangzhou.aliyuncs.com
ENV OSS_BUCKET=test-bucket
ENV OSS_ACCESS_KEY_ID=AccessKeyId
ENV OSS_ACCESS_KEY_SECRET=AccessKeySecret

WORKDIR /oss

RUN echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse" > /etc/apt/sources.list  && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse" >> /etc/apt/sources.list  && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse" >> /etc/apt/sources.list  && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse" >> /etc/apt/sources.list && \
    apt update && \
    apt upgrade -y && \
    apt install curl gdebi-core mime-support -y && \
    curl -o ossfs.deb $OSSFS_URL && \
    gdebi -n ossfs.deb && \
    echo ${OSS_BUCKET}:${OSS_ACCESS_KEY_ID}:${OSS_ACCESS_KEY_SECRET} > /etc/passwd-ossfs && \
    chmod 640 /etc/passwd-ossfs && \
    mkdir -p /oss/${OSS_BUCKET} && \
    rm -rf ossfs.deb && \
    apt clean

CMD [ "python3", "-m", "http.server" ]
