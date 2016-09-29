import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'sidebar',
	templateUrl: '../partials/sidebar.html',
	directives: [ROUTER_DIRECTIVES]
})
export class SideBarComponent { }