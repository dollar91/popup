<template>
	<div class="dialog" :class="{show: show}">
	    <div class="dialog-inner">
	        <div class="header">
        		<h1 v-if="title.text" class="title" :class="[title.style || 'normal']">
		            <span class="img"></span>
		            {{title.text}}
		        </h1>
		        <template v-else>
		        	<h1 v-if="title.head" class="head-img"><img :src="title.head"/></h1>
		        	<h1 v-else class="no-title"></h1>
		        </template>
	            <a href="javascript:;" class="close-btn" @click="closePopup"></a>
	        </div>
	        <p v-if="nick" class="baby-nick">{{nick}}</p>
	        <p v-if="desc" class="baby-desc">{{desc}}</p>
	        <div class="content">
	            <div class="content-inner">
	            	<div v-if="content.big" class="big-text">{{content.big}}</div>
	            	<div v-if="content.small" class="small-text">{{content.small}}</div>
	            	<div v-if="content.images && content.images.length" class="img-outer">
	            		<img v-for="item in content.images" :src="item.src" :title="item.title"/>
	            	</div>
	            	<div v-if="content.placeholder" class="input-outer">
	            		<input type="text" :placeholder="content.placeholder" />
	            	</div>
	            </div>
	            <div v-if="btns && btns.length" class="btns">
		        	<a v-for="btn in btns" href="javascript:;" class="btn" :class="[btn.style || 'normal']" @click="btn.click()">{{btn.text}}</a>
		        </div>
	        </div>	        
	    </div>
	</div>
</template>
<style rel="stylesheet/less" lang="less">
@import '../index.less';
</style>
<script>
export default {
	data() {
		return {
			title: {},
			nick: '',
			desc: '',
			content: {
				big: '',
				small: '',
				placeholder: '',
				images: []
			},
			btns: []
		}
	},
	mountend() {
		console.log(this.data)
	},
	updated(){
	},
	props: [
		'show',
		'data'
	],
	watch: {
		data(val) {
			if ( typeof val === 'object' ) {
				this.title = val.title || {};
				this.nick = val.nick;
				this.desc = val.desc;
				this.content = val.content || {};
				this.btns = val.btns || [];
				this.btns.forEach((item) => {
					if ( typeof item.click !== 'function' ) {
						item.click = () => {
							this.closePopup.call(item);
						}
					}
				})
			}
		}
	},
	methods: {
		closePopup() {
			this.show = false;
			this.$emit('toggle');
		}
	}
}
</script>