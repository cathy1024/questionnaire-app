import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

// @Injectable({
//     providedIn: 'root'
// })
// export class EditMenuService implements CanActivate {
//     constructor(public router: Router) {}

//     canActivate(
//         state: RouterStateSnapshot
//     ): Observable<boolean> | boolean {
//         return Observable.create(observer => {
//             let url: string = state.url;
//         })
//     }
// }