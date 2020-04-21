import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageListComponent } from './page-list/page-list.component';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/list', pathMatch: 'full'
    },
    {
        path: 'list', component: PageListComponent
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