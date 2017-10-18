import '../index.less';
import '../markdown.less';
import popup from '../index';
import {markdown} from 'markdown';
import guideMd from './guide.md';

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
$(document).on('click', '#btn2', ()=>{
	new popup({
		content: {
			big: '身高数据是宝宝的健康晴雨表，95%的妈妈都会记录的哦~'
		},
		btns: [{
			text: '看看为什么',
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
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
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
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
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
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
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
$(document).on('click', '#btn7', ()=>{
	new popup({
		title: {
			text: '自定义'
		},
		content: {
			placeholder: '请输入您要的数字~'
		},
		btns: [{
			text: '完成',
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
$(document).on('click', '#btn8', ()=>{
	new popup({
		title: {
			text: '自定义'
		},
		content: {
			placeholder: '请输入您要的数字~'
		},
		btns: [{
			text: '完成',
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});
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
			click: function() {
				window.location = '//m.baidu.com/';
			}
		}]
	}).show();
});

$('#Guide').html(guideMd);