---
title: '第一期'
date: '2023-01-06'
description: '新年的愿望是买人生中第一辆车，希望是Tesla'
---

2023 年想好好记录下生活以及工作中技术成长的点滴，克服对知识的焦虑。好记性不如烂笔头，希望可以保持记录的习惯以及提升写作的兴趣。

### text-decoration

起因是在工作群中有人报了一个样式上的 bug，商城中的打折商品会有一个划线的价格展示。没有关注之前是怎样实现的，看了下代码是封装了一个名为 Money 的组件。实现划线是使用的伪类选择器，而 CSS 的 [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) 属性可以完美的应用到这个场景，设置值为 line-through 就可以了。很简单的一个属性但是可以省去之前很复杂的代码实现，并且兼容性方面也没有什么问题。

```css
text-decoration: line-through;
```

### 优化多 if 语句一种手段

在一些比较老的项目中，不难看到类似这样的代码：

```javascript
if (today === 'monday') {
  dayValue = 0;
} else if (today === 'tuesday') {
  dayValue = 1;
} else if (today === 'wednesday') {
  dayValue = 2;
} else if (today === 'thursday') {
  dayValue = 3;
} else if (today === 'friday') {
  dayValue = 4;
} else if (today === 'saturday') {
  dayValue = 5;
} else if (today === 'sunday') {
  dayValue = 6;
} else {
  dayValue = -1;
}
```

针对这样比较冗长的代码，看起来也让维护者比较头大，如果我们将其用 switch 语句改造，则能得到以下这样的代码：

```javascript
switch (day) {
  case 'Monday':
    dayValue = 0;
    break;
  case 'Tuesday':
    dayValue = 1;
    break;
  case 'Wednesday':
    dayValue = 2;
    break;
  case 'Thursday':
    dayValue = 3;
    break;
  case 'Friday':
    dayValue = 4;
    break;
  case 'Saturday':
    dayValue = 5;
    break;
  case 'Sunday':
    dayValue = 6;
    break;
  default:
    dayValue = -1;
    break;
}
```

但是优化过后的代码还是显得过于臃肿，可读性也不好，但是如果我们把“星期”和对应的“dayValue”用一个对象来做一个映射关系，那么应该可以用一段很简短的代码解决。

```javascript
const weekMap = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};
dayValue = weekMap[day] ?? -1;
```

同时 else/default 的处理可以使用合并空值运算符来实现，是不是简单了很多呢？

### 好玩的

#### [Qwerty Learner](https://qwerty.kaiyi.cool/)

一个很酷的背记英语单词的站点

### 关于工作

来字节已经是 283 天了，入职之前就听说字节的平均司龄是 7 个月，照目前看来我已经超越了平均水平。几周前就听说部门负责人要离职，也就意味着我们部门整个架构都要发生地震式的变化。看着外面的风声公司大规模裁员的新闻随处可见，还是希望自己可以幸免于这波风浪。同时也让自己的危机意识更加强烈了，时刻保持谦卑心态去学习，去接纳。

###
