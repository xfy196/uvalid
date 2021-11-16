// 匹配正整数
export const isPositiveNum = (val) => {
  return /^[1-9]\d*$/.test(val);
};
// 匹配负整数
export const isNegativeNum = (val) => {
  return /^-[1-9]\d*$/.test(val);
};
// 匹配整数
export const isInteger = (val) => {
  return /^(-|\+)?\d+$/.test(val);
};
// 匹配非负浮点数
export const isNotNegativeFloatNum = (val) => {
  return /^\d+(\.\d+)?$/.test(val);
};
//匹配由 26 个英文字母组成的字符串
export const isAZaz = (val) => {
  return /^[A-Za-z]+$/.test(val);
};
//匹配由 26 个英文字母的大写组成的字符串
export const isAZ = (val) => {
  return /^[A-Z]+$/.test(val);
};
//匹配由 26 个英文字母的小写组成的字符串
export const isaz = (val) => {
  return /^[a-z]+$/.test(val);
};
// 匹配电子邮件地址
export const isEmailAddress = (val) => {
  return (
    /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) ||
    /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val)
  );
};
// 返回数组中的最大值
export const arrayMax = (arr) => Math.max(...arr);
// 返回数组中的最小值
export const arrayMin = (arr) => Math.min(...arr);
// 将数组块划分为指定大小的较小数组。
export const chunk = (arr, size) =>
  Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (v, i) => arr.slice(i * size, i * size + size)
  );

// 从数组中移除 false 值。
export const compact = (arr) => arr.filter(Boolean);

// countOccurrences: 计算数组中值的出现次数
export const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);

// deepFlatten: 深拼合数组
export const deepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

// difference: 返回两个数组之间的差异
export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};
// distinctValuesOfArray: 返回数组的所有不同值
export const distinctValuesOfArray = (arr) => [...new Set(arr)];
// everyNth: 返回数组中的每个第 n 个元素
export const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);
// filterNonUnique：筛选出数组中的非唯一值
export const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));
// flatten: 拼合数组
export const flatten = (arr) => arr.reduce((a, v) => a.concat(v), []);
// falttenDepth: 将数组向上拼合到指定深度
export const falttenDepth = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce(
        (a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v),
        []
      )
    : arr.reduce((a, v) => a.concat(v), []);
// groupby: 根据给定函数对数组元素进行分组
export const groupBy = (arr, func) =>
  arr
    .map(typeof func === "function" ? func : (val) => val[func])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
// head: 返回列表的头
export const head = (arr) => arr[0];
// initial: 返回除最后一个数组之外的所有元素
export const initial = (arr) => arr.slice(0, -1);
// initializeArrayWithRange: 初始化并填充范围值的数组
export const initializeArrayWithRange = (end, start = 0) =>
  Array.from({
    length: end - start,
  }).map((v, i) => i + start);
// initializeArrayWithValues: 初始化并填充具有指定值的数组
export const initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);
// intersection: 返回两个数组中存在的元素的列表
export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};
// last: 返回数组中的最后一个元素
export const last = (arr) => arr[arr.length - 1];
// mapObject: 使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成
export const mapObject = (arr, fn) =>
  ((a) => (
    (a = [arr, arr.map(fn)]),
    a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
// nthElement: 返回数组的第 n 个元素
export const nthElement = (arr, n = 0) =>
  (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
// pick: 从对象中选取对应于给定键的键值对
export const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
// pull: 对原始数组进行变异, 以筛选出指定的值
export const pull = (arr, ...args) => {
  let pulled = arr.filter((v, i) => !args.includes(v));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
};
// remove: 从数组中移除给定函数返回false的元素
export const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
// sample: 返回数组中的随机元素
export const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
// shuffle: 随机数组值的顺序
export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
// similarity: 返回两个数组中都显示的元素的数组
export const similarity = (arr, values) =>
  arr.filter((v) => values.includes(v));
// symmetricDifference: 返回两个数组之间的对称差
export const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter((x) => !sB.has(x)), ...b.filter((x) => !sA.has(x))];
};
// tail: 返回数组中的所有元素, 除第一个
export const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);
// take: 返回一个数组, 其中 n 个元素从开始处移除
export const take = (arr, n = 1) => arr.slice(0, n);
// takeRight: 返回一个数组, 其中 n 个元素从末尾移除
export const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
export const union = (a, b) => Array.from(new Set([...a, ...b]));
// without: 筛选出数组中具有指定值之一的元素
export const without = (arr, ...args) => arr.filter((v) => !args.includes(v));
// zip: 创建基于原始数组中的位置分组的元素数组
export const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map((x) => x.length));
  return Array.from({
    length: maxLength,
  }).map((_, i) => {
    return Array.from(
      {
        length: arrays.length,
      },
      (_, k) => arrays[k][i]
    );
  });
};
// 从给定数组中移除一项
export const removeArrayItem = function (arr, item) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] == item) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};
// 检查给定数组中是否包含某项
export const contains = function (arr, item) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};
// 验证不能包含字母
export const isNoWord = (value) => /^[^A-Za-z]*$/g.test(value);
// 验证中文和数字
export const isCHNAndEN = (value) =>
  /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(
    value
  );
// 验证邮政编码
export const isPostcode = (value) =>
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(
    value
  );
// 验证是否为微信号
export const isWeChatNum = (value) =>
  /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);
// 验证16进制颜色
export const isColor16 = (value) =>
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);
// 验证火车车次
export const isTrainNum = (value) => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);
// 验证手机机身码(IMEI)
export const isIMEI = (value) => /^\d{15,17}$/g.test(value);
// 验证必须带端口号的网址(或ip)
export const isHttpAndPort = (value) =>
  /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);
// 验证网址(支持端口和"?+参数"和"#+参数)
export const isRightWebsite = (value) =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(
    value
  );
// 验证统一社会信用代码
export const isCreditCode = (value) =>
  /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
// 验证迅雷链接
export const isThunderLink = (value) =>
  /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);
// 验证ed2k链接(宽松匹配)
export const ised2k = (value) => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);
// 验证磁力链接(宽松匹配)
export const isMagnet = (value) =>
  /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);
// 验证子网掩码
export const isSubnetMask = (value) =>
  /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(
    value
  );
// 验证linux"文件夹"路径
export const isLinuxFolderPath = (value) => /^(\/[^/]+)+\/?$/g.test(value);
// 验证linux"文件"路径
export const isLinuxFilePath = (value) => /^(\/[^/]+)+$/g.test(value);
// 验证window"文件夹"路径
export const isWindowsFolderPath = (value) =>
  /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);
// 验证window下"文件"路径
export const isWindowsFilePath = (value) =>
  /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);
// 验证股票代码(A股)
export const isAShare = (value) =>
  /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(
    value
  );
// 验证版本号格式必须为X.Y.Z
export const isVersion = (value) => /^\d+(?:\.\d+){2}$/g.test(value);
// 验证视频链接地址（视频格式可按需增删）
export const isVideoUrl = (value) =>
  /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(
    value
  );
// 验证图片链接地址（图片格式可按需增删）
export const isImageUrl = (value) =>
  /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(
    value
  );
// 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
export const isAccountNumber = (value) => /^[1-9]\d{9,29}$/g.test(value);
// 验证中文姓名
export const isChineseName = (value) =>
  /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);
// 验证英文姓名
export const isEnglishName = (value) =>
  /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);
// 验证车牌号(新能源)
export const isLicensePlateNumberNER = (value) =>
  /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(
    value
  );
// 验证车牌号(非新能源)
export const isLicensePlateNumberNNER = (value) =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(
    value
  );
// 验证车牌号(新能源+非新能源)
export const isLicensePlateNumber = (value) =>
  /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
    value
  );
// 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
export const isMPStrict = (value) =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(
    value
  );
// 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
export const isMPRelaxed = (value) =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);
// 验证email(邮箱)
export const isEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
    value
  );
// 验证座机电话(国内),如: 0341-86091234
export const isLandlineTelephone = (value) =>
  /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);
// 验证身份证号(1代,15位数字)
export const isIDCardOld = (value) =>
  /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);
// 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
export const isIDCardNew = (value) =>
  /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
// 验证身份证号, 支持1/2代(15位/18位数字)
export const isIDCard = (value) =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(
    value
  );
// 验证护照（包含香港、澳门）
export const isPassport = (value) =>
  /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(
    value
  );
// 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
export const isWebAccount = (value) => /^[a-zA-Z]\w{4,15}$/g.test(value);
// 验证中文/汉字
export const isChineseCharacter = (value) =>
  /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(
    value
  );
// 验证小数
export const isDecimal = (value) => /^\d+\.\d+$/g.test(value);
// 验证数字
export const isNumber = (value) => /^\d{1,}$/g.test(value);
// 验证qq号格式
export const isQQNum = (value) => /^[1-9][0-9]{4,10}$/g.test(value);
// 验证数字和字母组成
export const isNumAndStr = (value) => /^[A-Za-z0-9]+$/g.test(value);
// 验证英文字母
export const isEnglish = (value) => /^[a-zA-Z]+$/g.test(value);
// 验证大写英文字母
export const isCapital = (value) => /^[A-Z]+$/g.test(value);
// 验证小写英文字母
export const isLowercase = (value) => /^[a-z]+$/g.test(value);
// 返回当前url
export const currentURL = () => window.location.href;
// 获取url参数（第一种）
export function getUrlParam(name, origin = null) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
export function getUrlParams(name, origin = null) {
  let url = location.href;
  let temp1 = url.split("?");
  let pram = temp1[1];
  let keyValue = pram.split("&");
  let obj = {};
  for (let i = 0; i < keyValue.length; i++) {
    let item = keyValue[i].split("=");
    let key = item[0];
    let value = item[1];
    obj[key] = value;
  }
  return obj[name];
}
/**
 * 修改url中的参数
 * @param { string } paramName
 * @param { string } replaceWith
 */
export function replaceParamVal(paramName, replaceWith) {
  var oUrl = location.href.toString();
  var re = eval("/(" + paramName + "=)([^&]*)/gi");
  location.href = oUrl.replace(re, paramName + "=" + replaceWith);
  return location.href;
}
// 删除url中指定的参数
export function funcUrlDel(name) {
  var loca = location;
  var baseUrl = loca.origin + loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name) > -1) {
    var obj = {};
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    var url =
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, "")
        .replace(/\:/g, "=")
        .replace(/\,/g, "&");
    return url;
  }
}
//  获取窗口可视范围的高度
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
}
// 获取窗口可视范围宽度
export function getPageViewWidth() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}
// 获取窗口宽度
export function getPageWidth() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
// 获取窗口尺寸
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}
// 获取滚动条距顶部高度
export function getPageScrollTop() {
  let a = document;
  return a.documentElement.scrollTop || a.body.scrollTop;
}
// 获取滚动条距左边的高度
export function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}
/**
 * @param {*} element
 * 开启全屏
 */
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}
// 关闭全屏
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
// 返回当前滚动条位置
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
// 滚动到指定元素区域
export const smoothScroll = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
};
// 平滑滚动到页面顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
// http跳转https
export const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};
// 检查页面底部是否可见
export const bottomVisible = () => {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  );
};
/**
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 * 打开一个窗口
 */
export function openWindow(url, windowName, width, height) {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    var p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    window.open(url, windowName, p);
  } else {
    var win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
        y +
        ",left=" +
        x +
        ",scrollbars=" +
        scrollbars +
        ",dialog=yes,modal=yes,width=" +
        width +
        ",height=" +
        height +
        ",resizable=no"
    );
    eval("try { win.resizeTo(width, height); } catch(e) { }");
    win.focus();
  }
}
/**
 * @param { number } width
 * 自适应页面（rem）
 */
export function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
    ? (target.style.fontSize = "80px")
    : (target.style.fontSize = (target.clientWidth / width) * 100 + "px");
}

/**
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * localStorage 存贮
 * @param { String } key  属性
 * @param { string } value 值
 */
export const localStorageSet = (key, value) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
/**
 * @param {String} key  属性
 * localStorage 获取
 */
export const localStorageGet = (key) => {
  return localStorage.getItem(key);
};
/**
 * @param {String} key  属性
 * localStorage 移除
 */
export const localStorageRemove = (key) => {
  localStorage.removeItem(key);
};
/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param { number } expire 过期时间,毫秒数
 * localStorage 存贮某一段时间失效
 */
export const localStorageSetExpire = (key, value, expire) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
    localStorage.removeItem(key);
  }, expire);
};
/**
 * @param {String} key  属性
 * @param {*} value 值
 * sessionStorage 存贮
 */
export const sessionStorageSet = (key, value) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
};
/**
 * @param {String} key  属性
 * sessionStorage 获取
 */
export const sessionStorageGet = (key) => {
  return sessionStorage.getItem(key);
};
/**
 * @param {String} key  属性
 * sessionStorage 删除
 */
export const sessionStorageRemove = (key) => {
  sessionStorage.removeItem(key);
};
/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 * sessionStorage 存贮某一段时间失效
 */
export const sessionStorageSetExpire = (key, value, expire) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
  setTimeout(() => {
    sessionStorage.removeItem(key);
  }, expire);
};
/**
 * @param {String} key  属性
 * @param {*} value  值
 * @param { String } expire  过期时间,单位天
 * cookie 存贮
 */
export const cookieSet = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};
/**
 * @param {String} key  属性
 * cookie 获取
 */
export const cookieGet = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};
/**
 * @param {String} key  属性
 * cookie 删除
 */
export const cookieRemove = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
/**
 *  @param { number } num
 * 金钱格式化，三位加逗号
 */
export const formatMoney = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//  截取字符串并加身略号
export function subText(str, length) {
  if (str.length === 0) {
    return "";
  }
  if (str.length > length) {
    return str.substr(0, length) + "...";
  } else {
    return str;
  }
}
/**
 * @param file
 * @param format  指定文件格式
 * @param size  指定文件大小(字节)
 * @param formatMsg 格式错误提示
 * @param sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 * 获取文件base64编码
 */
export function fileToBase64String(
  file,
  format = ["jpg", "jpeg", "png", "gif"],
  size = 20 * 1024 * 1024,
  formatMsg = "文件格式不正确",
  sizeMsg = "文件大小超出限制"
) {
  return new Promise((resolve, reject) => {
    // 格式过滤
    let suffix = file.type.split("/")[1].toLowerCase();
    let inFormat = false;
    for (let i = 0; i < format.length; i++) {
      if (suffix === format[i]) {
        inFormat = true;
        break;
      }
    }
    if (!inFormat) {
      reject(formatMsg);
    }
    // 大小过滤
    if (file.size > size) {
      reject(sizeMsg);
    }
    // 转base64字符串
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let res = fileReader.result;
      resolve({ base64String: res, suffix: suffix });
      reject("异常文件，请重新选择");
    };
  });
}
/**
 * @param { number } fileSize
 * B转换到KB,MB,GB并保留两位小数
 */
export function formatFileSize(fileSize) {
  let temp;
  if (fileSize < 1024) {
    return fileSize + "B";
  } else if (fileSize < 1024 * 1024) {
    temp = fileSize / 1024;
    temp = temp.toFixed(2);
    return temp + "KB";
  } else if (fileSize < 1024 * 1024 * 1024) {
    temp = fileSize / (1024 * 1024);
    temp = temp.toFixed(2);
    return temp + "MB";
  } else {
    temp = fileSize / (1024 * 1024 * 1024);
    temp = temp.toFixed(2);
    return temp + "GB";
  }
}
/**
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 * base64转file
 */
export const base64ToFile = (base64, filename) => {
  let arr = base64.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split("/")[1]; // 图片后缀
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};
/**
 *  @param { base64 } base64
 * base64转blob
 */
export const base64ToBlob = (base64) => {
  let arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
/**
 *  @param { blob } blob
 *  @param { string } fileName
 * blob转file
 */
export const blobToFile = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
};
/**
 * @param { * } file 图片文件
 * file转base64
 */
export const fileToBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    return e.target.result;
  };
};
// 递归生成树形结构
export function getTreeData(
  data,
  pid,
  pidName = "parentId",
  idName = "id",
  childrenName = "children",
  key
) {
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][pidName] == pid) {
      data[i].key = data[i][idName];
      data[i][childrenName] = getTreeData(
        data,
        data[i][idName],
        pidName,
        idName,
        childrenName
      );
      arr.push(data[i]);
    }
  }

  return arr;
}
// 遍历树节点
export function foreachTree(data, childrenName = "children", callback) {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], childrenName, callback);
    }
  }
}
// 追溯父节点
export function traceParentNode(
  pid,
  data,
  rootPid,
  pidName = "parentId",
  idName = "id",
  childrenName = "children"
) {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[idName] == pid) {
      arr.push(node);
      if (node[pidName] != rootPid) {
        arr = arr.concat(
          traceParentNode(node[pidName], data, rootPid, pidName, idName)
        );
      }
    }
  });
  return arr;
}
// 寻找所有子节点
export function traceChildNode(
  id,
  data,
  pidName = "parentId",
  idName = "id",
  childrenName = "children"
) {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[pidName] == id) {
      arr.push(node);
      arr = arr.concat(
        traceChildNode(node[idName], data, pidName, idName, childrenName)
      );
    }
  });
  return arr;
}
/**
 *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
 *  @param { * } link 生成树形结构的依据
 * 根据pid生成树形结构
 */
export const createTree = (items, id = null, link = "pid") => {
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: createTree(items, item.id) }));
};

/**
 * @param {*} item
 * @param { array } data
 * 查询数组中是否存在某个元素并返回元素第一次出现的下标
 */
export function inArray(item, data) {
  for (let i = 0; i < data.length; i++) {
    if (item === data[i]) {
      return i;
    }
  }
  return -1;
}
/**
 * @param { string } osVersion
 * Windows根据详细版本号判断当前系统名称
 */
export function OutOsName(osVersion) {
  if (!osVersion) {
    return;
  }
  let str = osVersion.substr(0, 3);
  if (str === "5.0") {
    return "Win 2000";
  } else if (str === "5.1") {
    return "Win XP";
  } else if (str === "5.2") {
    return "Win XP64";
  } else if (str === "6.0") {
    return "Win Vista";
  } else if (str === "6.1") {
    return "Win 7";
  } else if (str === "6.2") {
    return "Win 8";
  } else if (str === "6.3") {
    return "Win 8.1";
  } else if (str === "10.") {
    return "Win 10";
  } else {
    return "Win";
  }
}
/**
 *  0: ios
 *  1: android
 *  2: 其它
 * 判断手机是Andoird还是IOS
 */
export function getOSType() {
  let u = navigator.userAgent,
    app = navigator.appVersion;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 0;
  }
  if (isAndroid) {
    return 1;
  }
  return 2;
}
/**
* @param { function } func
* @param { number } wait 延迟执行毫秒数
* @param { boolean } immediate  true 表立即执行，false 表非立即执行
 函数防抖
*/
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}
/**
* @param { function } func 函数
* @param { number } wait 延迟执行毫秒数
* @param { type } type 1 表时间戳版，2 表定时器版
 函数节流
       */
export function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}
/**
 * @param {*} target
 * 判断数据类型
 */
export function type(target) {
  let ret = typeof target;
  let template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": "string-object",
  };

  if (target === null) {
    return "null";
  } else if (ret == "object") {
    let str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return ret;
  }
}
/**
 * @param { number } min
 * @param { number } max
 * 生成指定范围随机数
 */
export const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
/**
 * @param {array} arr
 * 数组乱序
 */
export function arrScrambling(arr) {
  let array = arr;
  let index = array.length;
  while (index) {
    index -= 1;
    let randomIndex = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = middleware;
  }
  return array;
}
/**
 * @param { number } arg1
 * @param { number } arg2
 * 加法函数（精度丢失问题）
 */
export function add(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}
/**
 * @param { number } arg1
 * @param { number } arg2
 * 减法函数（精度丢失问题）
 */
export function sub(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}
/**
 * @param { number } num1
 * @param { number } num2
 * 除法函数（精度丢失问题）
 */
export function division(num1, num2) {
  let t1, t2, r1, r2;
  try {
    t1 = num1.toString().split(".")[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split(".")[1].length;
  } catch (e) {
    t2 = 0;
  }
  r1 = Number(num1.toString().replace(".", ""));
  r2 = Number(num2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
/**
 * @param { number } num1
 * @param { number } num2
 * 乘法函数（精度丢失问题）
 */
export function mcl(num1, num2) {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
/**
 * @param { function } f
 * 递归优化（尾递归）
 */
export function tco(f) {
  let value;
  let active = false;
  let accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}
// 生成随机整数
export function randomNumInteger(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
}
/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 * 去除空格
 */
export function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s)/g, "");
    case 4:
      return str.replace(/(\s$)/g, "");
    default:
      return str;
  }
}
/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 * 大小写转换
 */

export function turnCase(str, type) {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substr(1).toLowerCase();
    default:
      return str;
  }
}
/**
 *随机16进制颜色 hexColor
 * @returns
 */
export function hexColor() {
  let str = "#";
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 6; i++) {
    let index = Number.parseInt((Math.random() * 16).toString());
    str += arr[index];
  }
  return str;
}
/**
 * 随机16进制颜色 randomHexColorCode
 * @returns
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
// 转义html(防XSS攻击)
export const escapeHTML = (str) => {
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
};
export const detectDeviceType = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
};
/**
 * 隐藏所有指定标签
 * 例: hide(document.querySelectorAll('img'))
 */
export const hideTag = (...el) =>
  [...el].forEach((e) => (e.style.display = "none"));

/**
 * @param { element} el  元素节点
 * @param { string } ruleName  指定元素的名称
 * 返回指定元素的生效样式
 */
export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
/**
 * @param { element } parent
 * @param { element } child
 * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
 * 检查是否包含子元素
 */
export const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

/**
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 * 数字超过规定大小加上加号“+”，如数字超过99显示99+
 */
export const outOfNum = (val, maxNum) => {
  val = val ? val - 0 : 0;
  if (val > maxNum) {
    return `${maxNum}+`;
  } else {
    return val;
  }
};
// 如何隐藏所有指定的元素
export const hide = (el) =>
  Array.from(el).forEach((e) => (e.style.display = "none"));
// 如何检查元素是否具有指定的类？
export const hasClass = (el, className) => el.classList.contains(className);
// 如何切换一个元素的类?
export const toggleClass = (el, className) => el.classList.toggle(className);
// 如何检查指定的元素在视口中是否可见？
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
// 如何获取元素中的所有图像？
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName("img")].map((img) =>
    img.getAttribute("src")
  );
  return includeDuplicates ? images : [...new Set(images)];
};

// 如何在等待指定时间后调用提供的函数？
export const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
export const triggerEvent = (el, eventType, detail) =>
el.dispatchEvent(new CustomEvent(eventType, { detail }));
// 如何从元素中移除事件监听器?
export const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
// 如何获得给定毫秒数的可读格式？
export const formatDuration = ms => {
    if (ms < 0) ms = -ms;
    const time = {
      day: Math.floor(ms / 86400000),
      hour: Math.floor(ms / 3600000) % 24,
      minute: Math.floor(ms / 60000) % 60,
      second: Math.floor(ms / 1000) % 60,
      millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time)
      .filter(val => val[1] !== 0)
      .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
      .join(', ');
  };
//   如何获得两个日期之间的差异（以天为单位）？
export const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
//   如何为指定选择器创建具有指定范围，步长和持续时间的计数器？
export const counter = (selector, start, end, step = 1, duration = 2000) => {
    let current = start,
      _step = (end - start) * step < 0 ? -step : step,
      timer = setInterval(() => {
        current += _step;
        document.querySelector(selector).innerHTML = current;
        if (current >= end) document.querySelector(selector).innerHTML = end;
        if (current >= end) clearInterval(timer);
      }, Math.abs(Math.floor(duration / (end - start))));
    return timer;
  };
//   如何确定页面的浏览器选项卡是否聚焦？
export const isBrowserTabFocused = () => !document.hidden;
// 日期型函数封装
export function formatDay(date) {
    if(!!date){
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      return [year, month, day].map(formatNumber).join('-');
    }
  }
  
export function formatDay2(date) {
    if(!!date){
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      return [year, month, day].map(formatNumber).join('/');
    }
  }
  
export function formatWeek(date){
    if(!!date){
      var day = date.getDay();
      switch (day) {
        case 0:
          return '周日'
          break;
        case 1:
          return '周一'
          break;
        case 2:
          return '周二'
          break;
        case 3:
          return '周三'
          break;
        case 4:
          return '周四'
          break;
        case 5:
          return '周五'
          break;
        case 6:
          return '周六'
          break;
      }
    }
  }
  
export function formatHour(date){
    if(!!date){
      var hour = new Date(date).getHours();
      var minute = new Date(date).getMinutes();
      return [hour, minute].map(formatNumber).join(':');
    }
  }
  
export function timestamp(date, divisor=1000){
    if(date == undefined){
      return;
    }else if(typeof date == 'number'){
      return Math.floor(date/divisor);
    }else if(typeof date == 'string'){
      var strs = date.split(/[^0-9]/);
      return Math.floor(+new Date(strs[0] || 0,(strs[1] || 0)-1,strs[2] || 0,strs[3] || 0,strs[4] || 0,strs[5] || 0)/divisor);
    }else if(Date.prototype.isPrototypeOf(date)){
      return Math.floor(+date/divisor);
    }
  }
  
export function detimestamp(date){
    if(!!date){
      return new Date(date*1000);
    }
  }
  
export function formatNumber(n) {//给在0-9的日期加上0
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  /** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/  
export function formatTime(number,format="YYYY-MM-DD hh:mm:ss") {  
  
    var formateArr  = ['Y','M','D','h','m','s'];  
    var returnArr   = [];  
    
    var date = new Date(number * 1000);  
    returnArr.push(date.getFullYear());  
    returnArr.push(formatNumber(date.getMonth() + 1));  
    returnArr.push(formatNumber(date.getDate()));  
    
    returnArr.push(formatNumber(date.getHours()));  
    returnArr.push(formatNumber(date.getMinutes()));  
    returnArr.push(formatNumber(date.getSeconds()));  
    
    for (var i in returnArr)  
    {  
      format = format.replace(formateArr[i], returnArr[i]);  
    }  
    return format;  
  } 

   /**
     * 格式化时间，转化为几分钟前，几秒钟前
     * @param timestamp 时间戳，单位是毫秒
     */
 export function timeFormat(timestamp) {
        var mistiming = Math.round((Date.now() - timestamp) / 1000);
        var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
        var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
        for (var i = 0; i < arrn.length; i++) {
            var inm = Math.floor(mistiming / arrn[i]);
            if (inm != 0) {
                return inm + arrr[i] + '前';
            }
        }
    }
/**
     * 获取n天之前的日期 getDaysBeforeDate(10) 10天前
     * @param day 天数
     */
export function getDaysBeforeDate(day) {
    var date = new Date(),
        timestamp, newDate;
    timestamp = date.getTime();
    // 获取三天前的日期
    newDate = new Date(timestamp - day * 24 * 3600 * 1000);
    var year = newDate.getFullYear();
    // 月+1是因为js中月份是按0开始的
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    if (day < 10) { // 如果日小于10，前面拼接0
        day = '0' + day;
    }
    if (month < 10) { // 如果月小于10，前面拼接0
        month = '0' + month;
    }
    return [year, month, day].join('/');
}
// 过滤指定字段
export function filterArrBySex(data, name) {
    if (!name) {
        console.log(name)
        return data;
    } else {
        return data.filter(function(ele, index, self) {
            if (ele.name.includes(name)) {
                return ele
            }
        })
    }
}
 /**
     * 根据身份证获取出生年月
     * @param idCard
     */
export function getBirthdayFromIdCard(idCard) {
    var birthday = "";
    if (idCard != null && idCard != "") {
        if (idCard.length == 15) {
            birthday = "19" + idCard.substr(6, 6);
        } else if (idCard.length == 18) {
            birthday = idCard.substr(6, 8);
        }

        birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
    }

    return birthday;
}
/**
     * 根据身份证获取年龄
     * @param UUserCard
     */
export function IdCard(UUserCard) {
    //获取年龄
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
    if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
        age++;
    }
    return age
}
//数组降维
export function reduceDimension(arr) {
    var reduced = [];
    for (var i = 0; i < arr.length; i++) {
      reduced = reduced.concat(arr[i]);
    }
    return reduced;
}
// 将表单FromData转为普通对象
export function formToObject(formData){
    let obj = {}
    formData.forEach((item, index) => {
        obj[index] = item
    })
    return obj
}