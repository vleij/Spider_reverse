var glb;
var window = global;
window['common'] = {
                token: '4c33668ce7908007862a98a56b5162da',
                systime: '1641620599556',
                logid: '',
                langList: {
                    'zh': '中文',
                    'jp': '日语',
                    'jpka': '日语假名',
                    'th': '泰语',
                    'fra': '法语',
                    'en': '英语',
                    'spa': '西班牙语',
                    'kor': '韩语',
                    'tr': '土耳其语',
                    'vie': '越南语',
                    'ms': '马来语',
                    'de': '德语',
                    'ru': '俄语',
                    'ir': '伊朗语',
                    'ara': '阿拉伯语',
                    'est': '爱沙尼亚语',
                    'be': '白俄罗斯语',
                    'bul': '保加利亚语',
                    'hi': '印地语',
                    'is': '冰岛语',
                    'pl': '波兰语',
                    'fa': '波斯语',
                    'dan': '丹麦语',
                    'tl': '菲律宾语',
                    'fin': '芬兰语',
                    'nl': '荷兰语',
                    'ca': '加泰罗尼亚语',
                    'cs': '捷克语',
                    'hr': '克罗地亚语',
                    'lv': '拉脱维亚语',
                    'lt': '立陶宛语',
                    'rom': '罗马尼亚语',
                    'af': '南非语',
                    'no': '挪威语',
                    'pt_BR': '巴西语',
                    'pt': '葡萄牙语',
                    'swe': '瑞典语',
                    'sr': '塞尔维亚语',
                    'eo': '世界语',
                    'sk': '斯洛伐克语',
                    'slo': '斯洛文尼亚语',
                    'sw': '斯瓦希里语',
                    'uk': '乌克兰语',
                    'iw': '希伯来语',
                    'el': '希腊语',
                    'hu': '匈牙利语',
                    'hy': '亚美尼亚语',
                    'it': '意大利语',
                    'id': '印尼语',
                    'sq': '阿尔巴尼亚语',
                    'am': '阿姆哈拉语',
                    'as': '阿萨姆语',
                    'az': '阿塞拜疆语',
                    'eu': '巴斯克语',
                    'bn': '孟加拉语',
                    'bs': '波斯尼亚语',
                    'gl': '加利西亚语',
                    'ka': '格鲁吉亚语',
                    'gu': '古吉拉特语',
                    'ha': '豪萨语',
                    'ig': '伊博语',
                    'iu': '因纽特语',
                    'ga': '爱尔兰语',
                    'zu': '祖鲁语',
                    'kn': '卡纳达语',
                    'kk': '哈萨克语',
                    'ky': '吉尔吉斯语',
                    'lb': '卢森堡语',
                    'mk': '马其顿语',
                    'mt': '马耳他语',
                    'mi': '毛利语',
                    'mr': '马拉提语',
                    'ne': '尼泊尔语',
                    'or': '奥利亚语',
                    'pa': '旁遮普语',
                    'qu': '凯楚亚语',
                    'tn': '塞茨瓦纳语',
                    'si': '僧加罗语',
                    'ta': '泰米尔语',
                    'tt': '塔塔尔语',
                    'te': '泰卢固语',
                    'ur': '乌尔都语',
                    'uz': '乌兹别克语',
                    'cy': '威尔士语',
                    'yo': '约鲁巴语',
                    'yue': '粤语',
                    'wyw': '文言文',
                    'cht': '中文繁体'
                },
                account: {
                    is_login: '1',
                    user_name: '大狼狗丿',
                    add_name: true
                },
                sid: '0',
                locale: 'zh',
                remote: {
                    query: '你好',
                    lang: 'auto2zh',
                    expand: ''
                },
                rtSwitch: 'on',
                rtl: ['ara'],
                langMap: {
                    'zh': ['en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'zh', 'vie'],
                    'en': ['zh', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'ara': ['zh', 'en', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'est': ['zh', 'en', 'ara', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'bul': ['zh', 'en', 'ara', 'est', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'pl': ['zh', 'en', 'ara', 'est', 'bul', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'dan': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'de': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'ru': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'fra': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'fin': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'kor': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'nl': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'cs': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'rom': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'pt': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'jp': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'jpka', 'vie'],
                    'swe': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'slo': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'th': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'wyw': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'spa', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'spa': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'el', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'el': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'hu', 'it', 'yue', 'cht', 'vie'],
                    'hu': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'it', 'yue', 'cht', 'vie'],
                    'it': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'yue', 'cht', 'vie'],
                    'yue': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'cht', 'vie'],
                    'cht': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'vie'],
                    'vie': ['zh', 'en', 'ara', 'est', 'bul', 'pl', 'dan', 'de', 'ru', 'fra', 'fin', 'kor', 'nl', 'cs', 'rom', 'pt', 'jp', 'swe', 'slo', 'th', 'wyw', 'spa', 'el', 'hu', 'it', 'yue', 'cht']
                },
                // 图片翻译小流量
                ocrHit: '1',
                // 文档 翻译小流量
                docHit: '1' === '1' ? true : false,
                docLangHit: '0' === '1' ? true : false,
                domainHit: '0' === '1' ? true : false,
                docSid: '',
                docTransWithoutLogin: '0' === '1' ? true : false,
                pdfHit: (('1' === '1') || ('0' === '1')) ? true : false,
                defaultNavList: '[2,1,0,3,4,6,5,7,10,8,13,14,11,12,15,9]',
                ownerNavList: '[2,1,0,3,4,6,5,7,10,8,13,14,11,12,15,9]',
                transPageUrl: encodeURI('')
            };
    var i ='320305.131321201'
        function a(r) {
        if (Array.isArray(r)) {
            for (var o = 0, t = Array(r.length); o < r.length; o++)
                t[o] = r[o];
            return t
        }
        return Array.from(r)
    }
    function n(r, o) {
        for (var t = 0; t < o.length - 2; t += 3) {
            var a = o.charAt(t + 2);
            a = a >= "a" ? a.charCodeAt(0) - 87 : Number(a),
            a = "+" === o.charAt(t + 1) ? r >>> a : r << a,
            r = "+" === o.charAt(t) ? r + a & 4294967295 : r ^ a
        }
        return r
    }
    function e(r) {
        var o = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);
        if (null === o) {
            var t = r.length;
            t > 30 && (r = "" + r.substr(0, 10) + r.substr(Math.floor(t / 2) - 5, 10) + r.substr(-10, 10))
        } else {
            for (var e = r.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/), C = 0, h = e.length, f = []; h > C; C++)
                "" !== e[C] && f.push.apply(f, a(e[C].split(""))),
                C !== h - 1 && f.push(o[C]);
            var g = f.length;
            g > 30 && (r = f.slice(0, 10).join("") + f.slice(Math.floor(g / 2) - 5, Math.floor(g / 2) + 5).join("") + f.slice(-10).join(""))
        }
        var u = void 0
          , l = "" + String.fromCharCode(103) + String.fromCharCode(116) + String.fromCharCode(107);
        u = null !== i ? i : (i = window[l] || "") || "";
        for (var d = u.split("."), m = Number(d[0]) || 0, s = Number(d[1]) || 0, S = [], c = 0, v = 0; v < r.length; v++) {
            var A = r.charCodeAt(v);
            128 > A ? S[c++] = A : (2048 > A ? S[c++] = A >> 6 | 192 : (55296 === (64512 & A) && v + 1 < r.length && 56320 === (64512 & r.charCodeAt(v + 1)) ? (A = 65536 + ((1023 & A) << 10) + (1023 & r.charCodeAt(++v)),
            S[c++] = A >> 18 | 240,
            S[c++] = A >> 12 & 63 | 128) : S[c++] = A >> 12 | 224,
            S[c++] = A >> 6 & 63 | 128),
            S[c++] = 63 & A | 128)
        }
        for (var p = m, F = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(97) + ("" + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(54)), D = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(51) + ("" + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(98)) + ("" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(102)), b = 0; b < S.length; b++)
            p += S[b],
            p = n(p, F);

        return p = n(p, D),
        p ^= s,
        0 > p && (p = (2147483647 & p) + 2147483648),
        p %= 1e6,
        p.toString() + "." + (p ^ m)
}

function data(ddd){
    return {'token':window['common']['token'],'sign':e(ddd),'from': 'zh','to':'en','transtype': 'translang','simple_means_flag': 3,'domain': 'common'}
}