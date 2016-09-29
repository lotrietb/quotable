System.register(['angular2/core', 'angular2/router', './components/profile/profile.component', './components/vehicle/vehicle.component', './components/home/home.component', './header.component', './sidebar.component', './components/dashboard.component'], function(exports_1, context_1) {
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
    var core_1, router_1, profile_component_1, vehicle_component_1, home_component_1, header_component_1, sidebar_component_1, dashboard_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (vehicle_component_1_1) {
                vehicle_component_1 = vehicle_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/vehicles/...', name: 'Vehicles', component: vehicle_component_1.VehicleComponent },
                        { path: '/homes', name: 'Homes', component: home_component_1.HomeComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Dashboard'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header></header>\n    \t<div class=\"clearfix\">\n\t\t</div>\n\t\t<!-- BEGIN CONTAINER -->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"page-container\">\n\t\t\t\t<sidebar></sidebar>\n\t\t\t\t<div class=\"page-content-wrapper\">\n\t\t\t\t\t<div class=\"page-content\">\n\t\t\t\t\t\t<router-outlet> </router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    ",
                        directives: [header_component_1.HeaderComponent, sidebar_component_1.SideBarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map