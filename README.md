**多位前端开发工程师多年积累的工具函数**

1. 匹配正整数

```js
console.log(isPositiveNum(9)) //true
console.log(isPositiveNum(2.2)) //false
```

2. 匹配负整数

```js
 console.log(isNegativeNum(-9)) //true
 console.log(isNegativeNum(2.2)) //false
```

3. 匹配整数

```js
console.log(isInteger(-9)) //true
console.log(isInteger(2.2)) //false
```

4. 匹配非负浮点数

```js
console.log(isNotNegativeFloatNum(-9)) //false
console.log(isNotNegativeFloatNum(2.2)) //true
```

5. 匹配由 26 个英文字母组成的字符串

```js
console.log(isAZaz('122a')) //false
console.log(isAZaz('abc')) //true
```

6. 匹配由 26 个英文字母的大写组成的字符串

```js
console.log(isAZ('Acs')) //false
console.log(isAZ('ABC')) //true
```

7. 匹配由 26 个英文字母的小写组成的字符串

```js
console.log(isaz('Acs')) //false
console.log(isaz('abc')) //true
```

8. 匹配电子邮件地址

```js
console.log(isEmailAddress('Acs')) //false
console.log(isEmailAddress('133@qq.com')) //true
```

9. 返回数组中的最大值

```js
console.log(arrayMax(arr)) //5
```

10. 返回数组中的最小值

```js
console.log(arrayMin(arr)) //1
```

11. 将数组块划分为指定大小的较小数组

```js
let arr = [1, 2, 3, 5];
console.log(chunk(arr,2)) //0: Array [ 1, 2 ],1: Array [ 3, 5 ],
```

12. 从数组中移除 false 值

```js
let arr = [false,null,0,"",undefined,NaN,1]
console.log(compact(arr)) //[ 1 ]
```

13. 计算数组中值的出现次数

```js
let arr = [1,2,1,2,3,3,3,3];
console.log(countOccurrences(arr,3))//4
```

14. 深拼合数组

```js
let arr = [1, 2, [1, 2, [1, 2, [2, 3]]]];
console.log(deepFlatten(arr)) // [ 1, 2, 1, 2, 1, 2, 2, 3 ]
```

15. 返回两个数组之间的差异

```js
let arr = [1,2,3];
let arr2 = [2,3,4];
console.log(difference(arr,arr2))//[1]
console.log(difference(arr2,arr))//[4]
```

16. 返回数组的所有不同值

```js
let arr = [1, 2, 3, 1, 2];
console.log(distinctValuesOfArray(arr)) // [ 1, 2, 3 ]
```

17. 返回数组中的每个第 n 个元素

```js
let arr = [1,2,3,4,5]
console.log(everyNth(arr, 3))
```

18. 筛选出数组中的非唯一值

```js
let arr = [1,2,2,3,4,5]
console.log(filterNonUnique(arr))
```

19. 拼合数组

```js
ler arr = [1,[2,3,4], 4]
console.log(flatten(arr))
```

20. 将数组向上拼合到指定深度

```js
ler arr = [1,[2,3,4], 4]
console.log(flattfalttenDepthen(arr, 1))
```

21. 根据给定函数对数组元素进行分组

`groupBy(arr, func)`

22. 返回列表的头

```js
console.log(head([1,2,3,4]))
```

23. 返回除最后一个数组之外的所有元素

```js
console.log(initial([1,2,3,4]))
```

24. 初始化并填充具有指定值的数组

```js
console.log(initializeArrayWithRange(0, 10))
```

25. 初始化并填充具有指定值的数组

```js
console.log(initializeArrayWithValues(10, 2))
```

26. 返回两个数组中存在的元素的列表

```js
console.log(intersection([1,2,3,4], [1,1,2,3]))
```

27. 返回数组中的最后一个元素

```js
console.log(last([1,2,3,4]))
```

28. 使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成

```js
let arr = [1,10,3,4]
let res = mapObject(arr, (n) => {
    return n
})
console.log(res) // { '1': 1, '3': 3, '4': 4, '10': 10 }
```

29. nthElement: 返回数组的第 n 个元素

```js
console.log(nthElement([1,2,3,4], 2))
```

30. 从对象中选取对应于给定键的键值对

```js
pick({a:1, b:2}, ["a", "b"])
```

31. 对原始数组进行变异, 以筛选出指定的值

```js
let arr1 = [1,2,3,4,5]
pull(arr1, 1, 2)
console.log(arr1)
```

32. 从数组中移除给定函数返回false的元素

```js
remove(arr, func: Boolean)
```

33. 返回数组中的随机元素

```js
sample([1,2,3,4,5])
```

34. 随机数组值的顺序

```js
shuffle([1,2,3,4,5])
```

35. 返回两个数组中都显示的元素的数组

```js
similarity([1,2,3,4], [2,3,4,5])
```

36. 返回两个数组之间的对称差

```js
symmetricDifference([1,2,3,4], [1,2,5,4,6])
```

37. 返回数组中的所有元素, 除第一个

```js
console.log(tail([1,2,3,4]))
```

38. 返回一个数组, 其中 n 个元素从开始处移除

```js
console.log(take([1,2,3,4,5], 2))
```

39. 返回一个数组, 其中 n 个元素从末尾移除

```js
console.log(takeRight([1,2,3,4], 3))
```

40. 返回在两个数组中的任意一个中存在的每个元素

```js
console.log(union([1,2,3,4], [1,2,3,4,5]))
```

41. 筛选出数组中具有指定值之一的元素

```js
console.log([1,2,3,4,5], 2,3)
```

42. 创建基于原始数组中的位置分组的元素数组

```js
console.log(zip(...[1,2,3,4]))
```

43. 从给定数组中移除一项

```js
removeArrayItem([1,2,3,4], [2])
```

44. 检查给定数组中是否包含某项

```js
contains([1,2,3,4,5], 4)
```

45. 验证不能包含字母

```js
isNoWord("1234")
```

46. 验证中文和数字

```js
isCHNAndEN("你好世界123")
```

47. 验证邮政编码(中国)

```js
isPostcode("1234")
```

48. 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线

```js
console.log(isWeChatNum("xfy196_11"))
```

49. 验证16进制颜色

```js
isColor16("#ffffff")
```

50. 验证火车车次

```js
isTrainNum("D1234")
```

51. 验证手机机身码(IMEI)

```js
isIMEI("123456")
```

52. 验证必须带端口号的网址(或ip)

```js
isHttpAndPort("https://www.baidu.com:8080")
```

53. 验证统一社会信用代码

```js
isCreditCode("1111")
```

54. 验证迅雷链接

```js
isThunderLink("dasd")
```

55. 验证ed2k链接(宽松匹配)

```js
ised2k("")
```

56. 验证磁力链接(宽松匹配)

```js
isMagnet("")
```

57. 验证子网掩码

```js
isSubnetMask("")
```

58. 验证linux"文件夹"路径

```js
isLinuxFolderPath("")
```

59. 验证linux"文件"路径

```js
isLinuxFilePath("")
```

60. 验证window"文件夹"路径

```js
isWindowsFolderPath("")
```

61. 验证window下"文件"路径

```js
isWindowsFilePath("")
```

62. 验证股票代码(A股)

```js
isAShare("")
```

63. 验证版本号格式必须为X.Y.Z

```js
isVersion("")
```

64. 验证视频链接地址（视频格式可按需增删）

```js
isVideoUrl("")
```

65. 验证图片链接地址（图片格式可按需增删）

```js
isImageUrl("")
```

67. 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）

```js
isAccountNumber("")
```

68. 验证中文姓名

```js
isChineseName("")
```

69. 验证英文姓名

```js
isEnglishName("")
```

70. 验证车牌号(新能源)

```js
isLicensePlateNumberNER("")
```

71. 验证车牌号(非新能源)

```js
isLicensePlateNumberNNER("")
```

72. 验证车牌号(新能源+非新能源)

```js
isLicensePlateNumber("")
```

73. 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段

```js
isMPStrict("")
```

74. 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可

```js
isMPRelaxed("")
```

75. 验证email(邮箱)

```js
isEmail("")
```

76. 验证座机电话(国内),如: 0341-86091234

```js
isLandlineTelephone("")
```

77. 验证身份证号(1代,15位数字)

```js
isIDCardOld("")
```

78. 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X

```js
isIDCardNew("")
```

79. 验证身份证号, 支持1/2代(15位/18位数字)

```js
isIDCard("")
```

80. 验证护照（包含香港、澳门）

```js
isPassport("")
```

81. 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合

```js
isWebAccount("")
```

82. 验证中文/汉字

```js
isChineseCharacter("")
```

83. 验证数字

```js
isNumber(2)
```

84. 验证qq号格式

```js
isQQNum("")
```

85. 验证数字和字母组成

```js
isNumAndStr("")
```

86. 验证英文字母

```js
isEnglish("")
```

87. 验证大写英文字母

```js
isCapital("")
```

88. 验证小写英文字母

```js
isLowercase("")
```