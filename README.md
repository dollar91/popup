# 弹窗(popup) [普通版]
> 本弹窗组件视觉上遵循UED规范，功能上可模拟alert弹窗 confirm弹窗 promot弹窗 以及其他自定义内容弹窗。

> 支持VUE和普通两个版本。此版本为普通版本

### 标题 title (object)
|属性|类型|说明|
|----|----|----|
|text|string|标题文字居中，配默认图片|
|head|string|头像居中，正文部分可配昵称和描述|
|style|string|可选值有`normal official`分别表示默认和官方版|

#### 文字标题 text

育儿宝的弹窗标题分为三类  文字标题、头像标题、无文字无头像标题

<a id="btn1">demo</a>

````
<button id="btn1">demo</button>
$(document).on('click', '#btn1', ()=>{
	new popup({
		title: {
			text: '小提示',
			style: 'normal'
		},
		content: {
			big: '身高数据是宝宝的健康晴雨表，95%的妈妈都会记录的哦~'
		}
	}).show();
});
````
### 文字标题风格 style
文字标题风格目前有`style/normal`两种风格

<a id="btn5">demo</a>

````
<button id="btn5">demo</button>
$(document).on('click', '#btn5', ()=>{
	new popup({
		title: {
			text: '温馨提示',
			style: 'official'
		},
		content: {
			big: '宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。'
		}
	}).show();
});
````

#### 头像标题 head

<a id="btn3">demo</a>

````
<button id="btn3">demo</button>
$(document).on('click', '#btn3', ()=>{
	new popup({
		title: {
			head: 'http://h0.hucdn.com/open/201737/9b61376838129338_640x480.jpg'
		},
		nick: '我的大宝',
		content: {
			big: '确定删除我的大宝吗？删除后记录也会删除且无法回复哦~'
		},
		btns: [{
			text: '不了，我再看看',
			style: 'reset'
		}, {
			text: '谢谢，我还是要删',
			callback: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
````

#### 无标题

<a id="btn2">demo</a>

````
<button id="btn2">demo</button>
$(document).on('click', '#btn2', ()=>{
	new popup({
		content: {
			big: '身高数据是宝宝的健康晴雨表，95%的妈妈都会记录的哦~'
		},
		btns: [{
			text: '看看为什么',
			callback: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
````


### 正文 content (object)
正文部分 你可以选择按照UI规范去配置 也可以选择自己定义内容和样式

|属性|值类型|说明|
|----|----|----|
|nick|string|昵称，配合头像标题和简介使用|
|desc|string|简介，配合头像标题和昵称使用|
|big|string|大正文，正文的主要部分|
|small|string|小正文，正文的辅助部分|
|images|array|配图说明|


### 昵称、简介、大正文、小正文、配图

<a id="btn4">demo</a>

````
<button id="btn4">demo</button>
$(document).on('click', '#btn4', ()=>{
	new popup({
		title: {
			head: 'http://h0.hucdn.com/open/201737/9b61376838129338_640x480.jpg'
		},
		nick: '我的大宝',
		desc: '美食达人',
		content: {
			big: '现在发布记录即可得到1个心意红包哦，先到先得~',
			small: '数量有限先到先得哦',
			images: [{
				src: 'http://h0.hucdn.com/open/201737/9b61376838129338_640x480.jpg',
				title: '积分'
			}]
		},
		btns: [{
			text: '立即发布记录',
			callback: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
````

### 最大高度

<a id="btn5">demo</a>

````
<button id="btn5">demo</button>
$(document).on('click', '#btn5', ()=>{
	new popup({
		title: {
			text: '温馨提示',
			style: 'official'
		},
		content: {
			big: '宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。'
		}
	}).show();
});
````

### 滚动状态

<a id="btn6">demo</a>

````
<button id="btn6">demo</button>
$(document).on('click', '#btn6', ()=>{
	new popup({
		nick: '我的大宝',
		desc: '美食达人',
		content: {
			big: '宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。~',
			small: '数量有限先到先得哦',
			images: [{
				src: 'http://h0.hucdn.com/open/201737/9b61376838129338_640x480.jpg',
				title: '积分'
			}]
		},
		btns: [{
			text: '立即发布记录',
			callback: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
````

### 正文部分自定义-输入框-未输入

<a id="btn7">demo</a>

````
<button id="btn7">demo</button>
$(document).on('click', '#btn7', ()=>{
	new popup({
		title: {
			text: '自定义'
		},
		content: '<div class="input-outer"><input type="text" placeholder="请输入您要的数字~"/></div>',
		btns: [{
			text: '完成',
			callback: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
````

### 按钮 btns （array）
|属性|值类型|说明|
|----|----|----|
|text|string|按钮文字|
|style|string|风格，可选值是`normal reset`默认为`normal`|
|eventname|string|事件名称，默认为`click`|
|callback|function|事件回调，若无默认关闭弹窗|

### 按钮部分

<a id="btn9">demo</a>

````
<button id="btn9">demo</button>
$(document).on('click', '#btn9', ()=>{
	new popup({
		content: {
			big: '孕晚期了，准妈妈可以为宝宝准备出生用品啦，快点上贝贝看看吧~'
		},
		btns: [{
			text: '不急，谢谢',
			style: 'reset'
		}, {
			text: '好的，谢谢',
			callback: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
````
### 方法

弹窗组件提供三个方法分别是：显示/隐藏/切换显示状态 `show/hide/toggle`

<a id="btn10" style="z-index: 10000000;position: relative;">显示</a> 
<a id="btn11" style="z-index: 10000000;position: relative;">隐藏</a> 
<a id="btn12" style="z-index: 10000000;position: relative;">切换</a>

````
<a id="btn10">显示</a> <a id="btn11">隐藏</a> <a id="btn12">切换</a>
var thisPop = new popup({
	content: {
		big: '孕晚期了，准妈妈可以为宝宝准备出生用品啦，快点上贝贝看看吧~'
	},
	btns: [{
		text: '不急，谢谢',
		style: 'reset'
	}, {
		text: '好的，谢谢',
		callback: function() {
			window.location = '//m.baidu.com/';
		}
	}]
})
$(document).on('click', '#btn10', ()=>{
	thisPop.show();
});
$(document).on('click', '#btn11', ()=>{
	thisPop.hide();
});
$(document).on('click', '#btn12', ()=>{
	thisPop.toggle();
});
````