import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReporteComponent } from './components/reporte/reporte.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'reporte', component: ReporteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
