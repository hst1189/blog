# 白嫖Cloudflare无限多企业邮箱

## 收邮件
1. 进入cloudflare，选择一个已绑定的域名
2. 启用email路由，自动生成4条DNS记录（3个MX，1个TXT），选择添加（添加结果可以在DNS面板里看到）
3. 设置email路由规则，编辑Catch-All绑定一个転送邮箱，通过邮箱验证后，転送状态变为可用

> [!TIP]
> 邮箱「任意字符@ 上述绑定的域名」， 所接受到的邮件 都会転送到Catch-All绑定的邮箱
> 例如绑定域名 grapehut.us.kg， 邮件 to:  asdaeres@grapehut.us.kg    都会転送到Catch-All绑定的邮箱

> [!TIP]
> cloudflare邮件设置的概要栏里，可以查看所有転送的邮件



## 发邮件
通过resend.com的API服务  https://resend.com/onboarding

1. Add Domain，自动生成3条DNS（1条MX，2条TXT）
`Gmeek-html<img src="../imgs/resend/resend1.PNG">`


2. 添加回 cloudflare
`Gmeek-html<img src="../imgs/resend/resend2.PNG">`


#### 测试
```
curl -X POST 'https://api.resend.com/emails' \
 -H 'Authorization: Bearer re_123456789' \
 -H 'Content-Type: application/json' \
 -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "<p>it works!</p>"
}'
```