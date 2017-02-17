function Tab2($node) {
	this.$node = $node;
	this.init();
	this.bind();
}
Tab2.prototype.init = function(){
	this.$btn1 = this.$node.find(".news_first");
	this.$btn2 = this.$node.find(".news_last");
	this.$skate = this.$node.find(".news_tab_active");
	this.$cont1 = this.$node.find(".mod_tab_content_item").eq(0);
	this.$cont2 = this.$node.find(".mod_tab_content_item").eq(1);
}
Tab2.prototype.bind = function(){
	var _this = this;
	this.$btn1.on("mouseenter", function(){
		_this.$skate.css("transform", "translateX(0px)")
		_this.$cont2.removeClass("active");
		_this.$cont1.addClass("active");
	});
	this.$btn2.on("mouseenter", function(){
		_this.$skate.css("transform", "translateX(53px)")
		_this.$cont1.removeClass("active");
		_this.$cont2.addClass("active");
	});

}



module.exports = Tab2;