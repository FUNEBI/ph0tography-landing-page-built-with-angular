import { Routes } from '@angular/router';
const Routing: Routes = [
    
    {
      path: '',
      loadChildren: () =>
      import('../_metronic/layout/layout.module').then((m) => m.LayoutModule),
    },
]
export { Routing };