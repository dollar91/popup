'use strict'

require('./index.css');

class popup {
	
	constructor(options){
		let defaultOptions = {
			container: 'body',
			type: 'alert', //alert/confirm/promt
			title: {},
			nick: '',
			desc: '',
			content: {
				big: '',
				small: '',
				images: [],
				placeholder: ''
			},
			btns: []
		};
		this.config = $.extend(true, {}, defaultOptions, options);
		this.$popup = null;
		this.visibility = false;
		this._init();
	}

	_insertHTML() {
		var imageHtmlArr = [],
			contentHtml = '',
			html = '';

		if ( typeof this.config.content === 'string' ) {
			contentHtml = this.config.content;
		} else {
			this.config.content.images.forEach(function({src, title}){
				imageHtmlArr.push(`<img src="${src}" title="${title}">`);
			});
			contentHtml = `
				${this.config.content.big ? `<div class="big-text">${this.config.content.big}</div>` : ''}
            	${this.config.content.small ? `<div class="small-text">${this.config.content.small}</div>` : ''}
            	${imageHtmlArr.length ? `<div class="img-outer">${imageHtmlArr.join('')}</div>` : ''}
            `;
		}

		html = 
		`<div class="popup">
		    <div class="popup-inner">
		        <div class="header">
		            ${ this.config.title.text ? 
			            	`<h1 class="title ${this.config.title.style || 'normal'}">
				            	<span class="img"></span>
				            	${this.config.title.text}
				            </h1>`
			            :
			            	`${ this.config.title.head ? 
			        			`<h1 class="head-img"><img src="${this.config.title.head}"/></h1>`
			        		: '<h1 class="no-title"></h1>'}`
			        }
		            <a href="javascript:;" class="close-btn"></a>
		        </div>
		        ${this.config.nick ? `<p class="baby-nick">${this.config.nick}</p>`: ''}
		        ${this.config.desc ? `<p class="baby-desc">${this.config.desc}</p>`: ''}
		        <div class="content">
		            <div class="content-inner">
		            	${contentHtml}
		            </div>
		        </div>
		    </div>
		</div>`;
		if ( !$(this.config.container).length ) {
			throw Error('没有这个容器--来自育儿宝popup');
			return;
		}
		this.$popup = $(html).appendTo($(this.config.container));
		this._insertBtns();
	}

	_insertBtns() {
		let _self = this;
		let $btns = $('<div class="btns"></div>');
		if ( this.config.btns.length ) { 
			$btns.appendTo(this.$popup.find('.content')); 
		} else {
			return;
		}

		this.config.btns.forEach(function({text, style, eventname, callback}){
			let $btn = $(`<a href="javascript:;" class="btn ${style || 'normal'}">${text}</a>`).appendTo($btns);
			if ( typeof callback === 'function' ) {
				$btn.on(eventname || 'click', callback);
			} else {
				$btn.on(eventname || 'click', function() {
					_self.toggle(false);
				});
			}
		});
	}

	_bindEvents() {
		var _self = this;
		this.$popup.on('click', '.close-btn, .btn.reset', function() {
			_self.hide();
		});
	}

	_init() {
		if ( this.config.type === 'confirm' ) {
			var finded = false;
			this.config.btns.every(function({text, style}, index){
				if ( style === 'reset' ) {
					finded = index;
				}
			});
			if ( finded === false ) {
				this.config.btns.push({
					text: '取消',
					style: 'reset', // normal/reset
					click: null
				});
			}			
		}
		this._insertHTML();
		this._bindEvents();
	}

	toggle() {
		this.visibility = !this.visibility;
		this.$popup.toggleClass('show', this.visibility);
	}

	show() {
		this.visibility = true;
		this.$popup.toggleClass('show', this.visibility);
	}

	hide() {
		this.visibility = false;
		this.$popup.toggleClass('show', this.visibility);
	}
}

module.exports = popup;