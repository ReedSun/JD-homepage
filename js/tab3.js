function Tab3($node){
	this.$node = $node;
	this.init();
	this.bind();
	this.bindShow();
}
Tab3.prototype.init = function(){
	this.$target = this.$node.find(".hover_span>span");
	this.$chooseList = this.$node.find(".hover_frame");
}
Tab3.prototype.bind = function(){
	var _this = this;
	this.$chooseList.find("li").on("click", function(e){
		var content = $(e.target).text();
		_this.$target.text(content);
		_this.$chooseList.find("li").removeClass("active");
		$(e.target).addClass("active");
		_this.$chooseList.hide();
	})
}
Tab3.prototype.bindShow = function(){
	var _this = this;
	this.$node.find(".hover_span").on("mouseenter", function(){
		_this.$chooseList.show();
	})
}

module.exports = Tab3;