function Carousel($node){
	this.$node = $node;
	this.init();
	this.bind();
	this.auto();
}
Carousel.prototype.init = function(){
	this.$pic = this.$node.find(".pic>li");
	this.$lArrow = this.$node.find(".left");
	this.$rArrow = this.$node.find(".right");
	this.$nav = this.$node.find(".nav>li")
	this.nowImgId = 0;
	this.imgNum = this.$node.find(".pic>li").length;
	this.isAnimate = false;
};
Carousel.prototype.bind = function(){
	var _this = this;
	this.$lArrow.on("click", function(e){
		var toImgId
		if (_this.nowImgId === 0) {
			toImgId = _this.imgNum - 1;
		} else {
			toImgId = _this.nowImgId - 1;
		}
		_this.move(toImgId);
	})
	this.$rArrow.on("click", function(e){
		var toImgId
		if (_this.nowImgId === (_this.imgNum-1)) {
			toImgId = 0;
		} else {
			toImgId = _this.nowImgId + 1;
		}
		_this.move(toImgId);
	})
	this.$nav.on("mouseenter", function(e){
		var toImgId = $(e.target).index();
		_this.move(toImgId);
	})
}
Carousel.prototype.move = function(toImgId){
	if (this.isAnimate) {
		return;
	}
	var _this = this;
	this.isAnimate = true;
	this.$pic.eq(this.nowImgId).fadeOut(500);
	this.$pic.eq(toImgId).fadeIn(500, function(){
		_this.isAnimate = false;
	});
	this.nowImgId = toImgId
	this.navChange(this.nowImgId);
}
Carousel.prototype.navChange = function(toImgId){
	this.$nav.removeClass("active");
	this.$nav.eq(toImgId).addClass("active");
}
Carousel.prototype.auto = function(){
	var _this = this
	setInterval(function(){
		_this.move((_this.nowImgId+1)%_this.imgNum)
	}, 2000)
}

module.exports = Carousel;