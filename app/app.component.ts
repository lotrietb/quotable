import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProfileComponent} from './components/profile/profile.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './header.component';
import {SideBarComponent} from './sidebar.component';
import {DashboardComponent} from './components/dashboard.component';


@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
	{ path: '/profile', name: 'Profile', component: ProfileComponent},
	{ path: '/vehicles/...', name: 'Vehicles', component: VehicleComponent},
	{ path: '/homes', name: 'Homes', component: HomeComponent},
	{ path: '/*other', name: 'Other', redirectTo: ['Dashboard']}
])
@Component({
    selector: 'my-app',
    template: `
    	<header></header>
    	<div class="clearfix">
		</div>
		<!-- BEGIN CONTAINER -->
		<div class="container">
			<div class="page-container">
				<sidebar></sidebar>
				<div class="page-content-wrapper">
					<div class="page-content">
						<router-outlet> </router-outlet>
					</div>
				</div>
			</div>
		</div>
    `,
    directives: [HeaderComponent, SideBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }