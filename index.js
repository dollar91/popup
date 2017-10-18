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
		this.$dialog = null;
		this.visibility = false;
		this.init();
	}

	insertHTML() {
		var imageHtmlArr = [],
			html = '';

		this.config.content.images.forEach(function({src, title}){
			imageHtmlArr.push(`<img src="${src}" title="${title}">`);
		});

		html = 
		`<div class="dialog">
		    <div class="dialog-inner">
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
		            	${this.config.content.big ? `<div class="big-text">${this.config.content.big}</div>` : ''}
		            	${this.config.content.small ? `<div class="small-text">${this.config.content.small}</div>` : ''}
		            	${imageHtmlArr.length ? `<div class="img-outer">${imageHtmlArr.join('')}</div>` : ''}
		            	${this.config.content.placeholder ? `<div class="input-outer"><input type="text" placeholder="${this.config.content.placeholder}" /></div>` : ''}
		            </div>
		        </div>
		    </div>
		</div>`;
		if ( !$(this.config.container).length ) {
			throw Error('没有这个容器--来自育儿宝popup');
			return;
		}
		this.$dialog = $(html).appendTo($(this.config.container));
		this.insertBtns();
	}

	insertBtns() {
		let _self = this;
		let $btns = $('<div class="btns"></div>');
		if ( this.config.btns.length ) { 
			$btns.appendTo(this.$dialog.find('.content')); 
		} else {
			return;
		}

		this.config.btns.forEach(function({text, style, click}){
			let $btn = $(`<a href="javascript:;" class="btn ${style || 'normal'}">${text}</a>`).appendTo($btns);
			if ( typeof click === 'function' ) {
				$btn.on('click', click);
			} else {
				$btn.on('click', function() {
					_self.toggle(false);
				});
			}
		});
	}

	bindEvents() {
		var _self = this;
		this.$dialog.on('click', '.close-btn, .btn.reset', function() {
			_self.hidden();
		});
	}

	toggle() {
		this.visibility = !this.visibility;
		this.$dialog.toggleClass('show', this.visibility);
	}

	show() {
		this.visibility = true;
		this.$dialog.toggleClass('show', this.visibility);
	}

	hidden() {
		this.visibility = false;
		this.$dialog.toggleClass('show', this.visibility);
	}

	init() {
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
		this.insertHTML();
		this.bindEvents();
	}

}

module.exports = popup;