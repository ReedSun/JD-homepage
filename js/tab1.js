function Tab1($node) {
	this.$node = $node
	this.init();
	this.bindIn();
	this.bindOut();
}
Tab1.prototype.init = function(){
	this.$triggerNode = this.$node.find("ul>li");
	this.$responseWrapper = this.$node.find(".tab_show");
	this.$responseNode = this.$responseWrapper.find(".tab_show_item");
}

Tab1.prototype.bindIn = function() {
	var _this = this;
	this.$triggerNode.on("mouseenter", function(e){
		_this.index = $(e.target).index();
		_this.$responseNode.hide();
		$(_this.$responseNode[_this.index]).show();
		_this.$responseWrapper.show();
	}) 
}
Tab1.prototype.bindOut = function() {
	var _this =this;
	this.$node.on("mouseleave", function(){
		_this.$responseWrapper.hide();
		_this.$responseNode.hide();
	})
}
module.exports = Tab1;