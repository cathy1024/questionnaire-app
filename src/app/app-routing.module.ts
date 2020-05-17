import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageListComponent } from './page-list/page-list.component';
import { PageViewComponent } from './page-view/page-view.component';


const appRoutes: Routes = [
    {
        path: '', redirectTo: '/list', pathMatch: 'full'
    },
    {
        path: 'list', component: PageListComponent
    },
    {
        path: 'view/:id', component: PageViewComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}