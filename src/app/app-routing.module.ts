import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageListComponent } from './page-list/page-list.component';
// import { PageEditComponent } from './page-edit/page-edit.component';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/list', pathMatch: 'full'
    },
    {
        path: 'list', component: PageListComponent
    },
    // {
    //     path: 'edit/:id', component: PageEditComponent
    // }
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