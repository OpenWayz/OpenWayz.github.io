#!/bin/bash

# Cloudflare API 凭据
auth_email="your_email"
auth_key="your_api_key"

# 域名信息
name="your_domain.com"  # 主域名
name_2="subdomain.your_domain.com"  # 二级域名
content_cm1="cname_main_entry.your_domain.com"  # 端口开启时的 CNAME 记录值
content_cm2="cname_backup_entry.your_domain.com"  # 端口关闭时的 CNAME 记录值

# 获取区域 ID
zone=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones" \
-H "X-Auth-Email: ${auth_email}" \
-H "X-Auth-Key: ${auth_key}" \
-H "Content-Type: application/json" | jq -r '.result[] | select(.name == "'"${name}"'") | .id')

if [[ -z $zone ]]; then
  echo "错误：未找到区域 ID。"
  exit 1
fi

echo "区域 ID：$zone"

# 获取记录 ID
record=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/${zone}/dns_records" \
-H "X-Auth-Email: ${auth_email}" \
-H "X-Auth-Key: ${auth_key}" \
-H "Content-Type: application/json" | jq -r '.result[] | select(.name == "'"${name_2}"'") | .id')

if [[ -z $record ]]; then
  echo "错误：未找到记录 ID。"
  exit 1
fi

echo "记录 ID：$record"

# 设置初始 CNAME 记录值
content=""

# 持续监视目标端口
while true; do
  # 检查目标端口是否开启
  if nc -z -w 2 cm1.moni.cyou 49803 > /dev/null 2>&1; then
    # 如果目标端口开启，则将 CNAME 记录值设置为初始值
    content="$content_cm1"
    echo "主入口：${content}"
  else
    # 如果目标端口关闭，则将 CNAME 记录值设置为备份值
    content="$content_cm2"
    echo "备入口：${content}"
  fi

  # 使用新的 CNAME 记录值更新 DNS 记录
  response=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${record}" \
  -H "X-Auth-Email: ${auth_email}" \
  -H "X-Auth-Key: ${auth_key}" \
  -H "Content-Type: application/json" \
  --data "{\"type\":\"CNAME\",\"name\":\"${name_2}\",\"content\":\"${content}\",\"ttl\":120,\"proxied\":false}" | jq -r '.success')
  
  if [[ $response == "true" ]]; then
    echo "DNS 记录更新成功。${content}"
  else
    echo "更新 DNS 记录时出错。"
  fi

  # 等待 5 分钟
  sleep 300

done
