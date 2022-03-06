import execjs
import requests
import time
with open('login.js', encoding='utf-8') as f:
    js_code = f.read()
node = execjs.get()
#编译js代码
ctx = node.compile(js_code) #compile方法去加载js代码，参数cwd指定本地安装模块所在目录


password = ctx.eval('')  #eval方法中，整个函数调用包含在字符串内

data = {
'username': 'dalies',
'password': password['pwd'],
};
headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36",'accept':'application/json, text/plain, */*','referer': 'https://freightsmart.oocl.com','Cookie': 'HMF_CI=33980c649c78dfe0db85724ae9920f6579f1fa5f7e624a0447b2feccd7a9502041; CSH_DF=2sD8MM7Vo0C13dEDcDcAdGYqQbSxoXe+lJOEm5xWfNbvl+aUCLA2MVqKYPr6LtJcw0; django_language=zh-cn; sessionid=2sf4c40mv6fwck3iwrtw87x8wkvopq10; cookiePolicy=Accepted; cookiePreference=Accepted; Hm_lvt_51968685d7ecb4f923773e44887be501=1644298459; Hm_lpvt_51968685d7ecb4f923773e44887be501=1644314624'}
s = requests.session()
d= s.get('https://freightsmart.oocl.com/api/common/captcha/image?d='+str(int(time.time())))
cookies = requests.utils.dict_from_cookiejar(d.cookies)
ECTIMGCAPTCHA = cookies['ECTIMGCAPTCHA']
headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36",'accept':'application/json, text/plain, */*','referer': 'https://freightsmart.oocl.com','Cookie': 'HMF_CI=33980c649c78dfe0db85724ae9920f6579f1fa5f7e624a0447b2feccd7a9502041; CSH_DF=2sD8MM7Vo0C13dEDcDcAdGYqQbSxoXe+lJOEm5xWfNbvl+aUCLA2MVqKYPr6LtJcw0; django_language=zh-cn; sessionid=2sf4c40mv6fwck3iwrtw87x8wkvopq10; cookiePolicy=Accepted; cookiePreference=Accepted; Hm_lvt_51968685d7ecb4f923773e44887be501=1644298459; Hm_lpvt_51968685d7ecb4f923773e44887be501=1644314624','ECTIMGCAPTCHA':ECTIMGCAPTCHA}
a = s.post('https://freightsmart.oocl.com/api/admin/user/login', data=data, headers=headers)
print(a.text)