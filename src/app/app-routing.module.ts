import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageListComponent } from './page-list/page-list.component';
import { PageViewComponent } from './page-view/page-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const appRoutes: Routes = [
    {
        path: '', component: PageListComponent
    },
    {
        path: 'view/:id', component: PageViewComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
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