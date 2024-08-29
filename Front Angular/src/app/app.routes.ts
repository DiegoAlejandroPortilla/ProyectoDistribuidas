// app.routes.ts
import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './usuarios/listar/listar.component';
import { CrearUsuarioComponent } from './usuarios/crear/crear.component';
import { EditarUsuarioComponent } from './usuarios/editar/editar.component';
import { ListarCursosComponent } from './cursos/listar/listar.component';
import { CrearCursoComponent } from './cursos/crear/crear.component';
import { EditarCursoComponent } from './cursos/editar/editar.component';
import { LoginComponent } from './login/login.component';  // Asegúrate de importar el componente de login
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Ruta para login
  { path: 'usuarios/listar', component: ListarUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/crear', component: CrearUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'cursos/listar', component: ListarCursosComponent, canActivate: [AuthGuard] },
  { path: 'cursos/crear', component: CrearCursoComponent, canActivate: [AuthGuard] },
  { path: 'cursos/editar/:id', component: EditarCursoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: '**', redirectTo: '/login' }  // Redirige a login para rutas no encontradas
];
