(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ec-masthead'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"mnv-ec-masthead\">\n  <div class=\"mnv-ec-masthead-outer-wrap\">\n    <div class=\"mnv-ec-masthead-wrap\">\n      <a href=\"http://www.economist.com\" class=\"mnv-ec-masthead-logo svg-logo\">\n        <img alt=\"The Economist\" src=\"//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg\" class=\"mh-logo\">\n      </a>\n      <h1 class=\"mnv-ec-masthead-text\">\n        <span class=\"mnv-ec-masthead-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.masthead : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n        <span class=\"mnv-ec-masthead-flytitle\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.masthead : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</span>\n      </h1>\n    </div>\n  </div>\n</div>";
},"useData":true});
}());