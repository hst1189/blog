# 创建一个本地ChatGPT

### 0. 前提
本地Linux（window可以利用wsl），或者VPS上构建 Linux

### 1. 安装docker环境
```
curl -fsSL https://get.docker.com | sh    #安装Docker
systemctl enable --now docker             #启动Docker服务
docker -v                                 #查看docker版本，检查是否安装成功
```

### 2. 安装NextChat
```
docker pull yidadaa/chatgpt-next-web      #从docker拉取（https://hub.docker.com/r/yidadaa/chatgpt-next-web）

docker run -d -p 3000:3000 \             #启动容器  端口号3000
   -e OPENAI_API_KEY=sk-xxxx \           #KEY通过 https://platform.openai.com/api-keys 获取
   -e CODE=页面访问密码 \                 #密码可以为空
   yidadaa/chatgpt-next-web 

例：
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY=sk-xxxx \
   -e CODE= \
   yidadaa/chatgpt-next-web

docker ps -a                             #查看docker容器状态
```

### 3. 打开网页，即开即用
http://127.0.0.1:3000/

