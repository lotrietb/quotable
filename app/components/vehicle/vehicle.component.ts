import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {VehiclesListComponent} from './vehicleslist.component'

@RouteConfig([
	{ path: '/list', name: "VehiclesList", component: VehiclesListComponent, useAsDefault: true},
	{ path: '/*other', name: "Other", redirectTo: ['VehiclesList']},
])
@Component({
	selector: '<vehicle>',
	templateUrl: `<h2>Vehicles</h2>`
})
export class VehicleComponent {}