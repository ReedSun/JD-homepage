function Tab4($node) {
	this.$node = $node
	this.init();
	this.bind();
}
Tab4.prototype.init = function(){
	this.$trigger = this.$node.find(".top_tab_hd>a");
	this.$response = this.$node.find(".top_tab_bd_item");
	this.$skate = this.$node.find(".top_tab_active");
}

Tab4.prototype.bind = function() {
	var _this = this;
	this.$trigger.on("mouseenter", function(e){
		var index = $(e.target).index();
		_this.$response.removeClass("active");
		_this.$response.eq(index).addClass("active");
		var str = "translateX(" + (index*78) +"px)"
		_this.$skate.css("transform", str)
	}) 
}

module.exports = Tab4