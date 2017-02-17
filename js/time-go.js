function TimeGo($node){
	this.$node = $node;
	this.init();
	this.auto();
}

TimeGo.prototype.init = function(){
	this.$h = this.$node.find(".hour>span");
	this.$m = this.$node.find(".minute>span");
	this.$s = this.$node.find(".second>span");
}

TimeGo.prototype.auto = function(){
	var _this = this
	var h = this.$h.text();
	var m = this.$m.text();
	var s = this.$s.text();
	setInterval(function(){
		s -= 1;
		if (s<0) {
			s = 59;
			m -= 1;
			if (m<0) {
				m = 59;
				h -= 1;
				if (h<0) {
					h = 1;
					m = 11;
					s = 11;
					alert("秒杀的时间都走完了，还不快点录取我~")
				}
			}
		}
		s=s+"";
		m=m+"";
		h=h+"";
		if (s.length === 1) {
			s = "0" + s;
		}
		if (m.length === 1) {
			m = "0" + m;
		}
		if (h.length === 1) {
			h = "0" + h;
		}
		_this.$h.text(h)
		_this.$m.text(m)
		_this.$s.text(s)
	}, 1000)
}
module.exports = TimeGo;
