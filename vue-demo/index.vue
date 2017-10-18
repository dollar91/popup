<template>
	<div>
		<button id="btn1" @click="popup1">标题部分-有标题</button><br/><br/>
		<button id="btn2" @click="popup2">标题部分-无标题</button><br/><br/>
		<button id="btn3" @click="popup3">标题部分-头像类</button><br/><br/>
		<button id="btn4" @click="popup4">正文部分-昵称简介大正文小正文配图</button><br/><br/>
		<button id="btn5" @click="popup5">正文部分-最大高度</button><br/><br/>
		<button id="btn6" @click="popup6">正文部分-滚动状态</button><br/><br/>
		<button id="btn7" @click="popup7">正文部分-输入框-未输入</button><br/><br/>
		<button id="btn8" @click="popup8">正文部分-输入框-报错</button><br/><br/>
		<button id="btn9" @click="popup9">按钮部分</button><br/><br/>
		<popup :show="show1" v-on:toggle="popup1" :data="data1"></popup>
		<popup :show="show2" v-on:toggle="popup2" :data="data2"></popup>
		<popup :show="show3" v-on:toggle="popup3" :data="data3"></popup>
		<popup :show="show4" v-on:toggle="popup4" :data="data4"></popup>
		<popup :show="show5" v-on:toggle="popup5" :data="data5"></popup>
		<popup :show="show6" v-on:toggle="popup6" :data="data6"></popup>
		<popup :show="show7" v-on:toggle="popup7" :data="data7"></popup>
		<popup :show="show8" v-on:toggle="popup8" :data="data8"></popup>
		<popup :show="show9" v-on:toggle="popup9" :data="data9"></popup>
	</div>
</template>
<style></style>
<script>
	import popup from './popup.vue'
	export default {
		data() {
			return {
				show1: false,
				data1: {},
				show2: false,
				data2: {},
				show3: false,
				data3: {},
				show4: false,
				data4: {},
				show5: false,
				data5: {},
				show6: false,
				data6: {},
				show7: false,
				data7: {},
				show8: false,
				data8: {},
				show9: false,
				data9: {}
			}
		},
		components: {
			popup
		},
		methods: {
			popup1(toggle) {
				this.data1 = {
					title: {
						text: '小提示',
						style: 'normal'
					},
					content: {
						big: '身高数据是宝宝的健康晴雨表，95%的妈妈都会记录的哦~'
					}
				};
				this.show1 = !!toggle;
			},
			popup2(toggle) {
				this.data2 = {
					content: {
						big: '身高数据是宝宝的健康晴雨表，95%的妈妈都会记录的哦~'
					}
					,
					btns: [{
						text: '看看为什么',
						click: function() {
							window.location = '//m.baidu.com/';
						}
					}]
				};
				this.show2 = !!toggle;
			},
			popup3(toggle) {
				this.data3 = {
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
				};
				this.show3 = !!toggle;
			},
			popup4(toggle) {
				this.data4 = {
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
				};
				this.show4 = !!toggle;
			},
			popup5(toggle) {
				this.data5 = {
					title: {
						text: '温馨提示',
						style: 'official'
					},
					content: {
						big: '宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。宝宝喜欢通过敲打玩具发出声音。他的动作进一步完善，已经能够撕纸了。准备一堆彩页广告纸让宝宝和宝宝一起撕个够。宝宝能把一样东西用手指紧紧握住。为满足他想制造声音的愿望，可以给他塑料调羹、瓶盖、金属罐、盘子或玩具鼓让他敲让他能制造出各种声音；和他一起把一块积木拿起来放在另一块上面，搭一座两层或更高的塔，让后让宝宝推到。'
					}
				};
				this.show5 = !!toggle;
			},
			popup6(toggle) {
				this.data6 = {
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
				};
				this.show6 = !!toggle;
			},
			popup7(toggle) {
				this.data7 = {
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
				};
				this.show7 = !!toggle;
			},
			popup8(toggle) {
				this.data8 = {
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
				};
				this.show8 = !!toggle;
			},
			popup9(toggle) {
				this.data9 = {
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
				};
				this.show9 = !!toggle;
			}
		}
	}
</script>