import execjs
import requests
with open('t.js',encoding='utf-8') as f:
    js_code = f.read()
node = execjs.get()
#编译js代码
ctx = node.compile(js_code) #compile方法去加载js代码，参数cwd指定本地安装模块所在目录

#两种方式执行js函数
js = '''

'''
data1 = ctx.eval('')  #eval方法中，整个函数调用包含在字符串内
url = 'https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time=1641015006&category=pc_profile_recommend&aid=24&app_name=toutiao_web&_signature='+data1
print(url)
headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36",'accept':'application/json, text/plain, */*','referer': 'https://www.toutiao.com/?wid=1641028484634'}

res = requests.get(url,headers=headers)
print(res.text)
