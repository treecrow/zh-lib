function Mue(options) {}
Mue.prototype._init = function(options) {
  const { el, template, data, mounted, methods } = options;
  this.el = el;
  this.data = data;
};
