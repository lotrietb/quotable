System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent() {
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        template: "\n\t\t<h3 class=\"page-title\">\n\t\t\tDashboard</h3>\n\t\t<div class=\"page-bar\">\n\t\t\t<ul class=\"page-breadcrumb\">\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t\t<a href=\"index.html\">Home</a>\n\t\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">Dashboard</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"page-toolbar\">\n\t\t\t\t<div id=\"dashboard-report-range\" class=\"tooltips btn btn-fit-height btn-sm green-haze btn-dashboard-daterange\" data-container=\"body\" data-placement=\"left\" data-original-title=\"Change dashboard date range\">\n\t\t\t\t\t<i class=\"icon-calendar\"></i>&nbsp;&nbsp; \n\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n\t\t\t\t\t<!-- uncomment this to display selected daterange in the button \n\t\t\t\t\t&nbsp; <span class=\"thin uppercase visible-lg-inline-block\"></span>&nbsp;\n\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n\t\t\t\t\t-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- BEGIN DASHBOARD STATS -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<a class=\"dashboard-stat dashboard-stat-light blue-soft\" href=\"#\">\n\t\t\t\t\t\t<div class=\"visual\">\n\t\t\t\t\t\t\t<i class=\"fa fa-comments\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"number\">\n\t\t\t\t\t\t\t\t 1349\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t New Feedbacks\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<a class=\"dashboard-stat dashboard-stat-light red-soft\" href=\"#\">\n\t\t\t\t\t\t<div class=\"visual\">\n\t\t\t\t\t\t\t<i class=\"fa fa-trophy\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"number\">\n\t\t\t\t\t\t\t\t 12,5M$\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t Total Profit\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<a class=\"dashboard-stat dashboard-stat-light green-soft\" href=\"#\">\n\t\t\t\t\t\t<div class=\"visual\">\n\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"number\">\n\t\t\t\t\t\t\t\t 549\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t New Orders\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<a class=\"dashboard-stat dashboard-stat-light purple-soft\" href=\"#\">\n\t\t\t\t\t\t<div class=\"visual\">\n\t\t\t\t\t\t\t<i class=\"fa fa-globe\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"number\">\n\t\t\t\t\t\t\t\t +89%\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t Brand Popularity\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map