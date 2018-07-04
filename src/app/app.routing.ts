import { RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { PhotoVideoComponent } from './photo-video/photo-video.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AudioComponent } from './audio/audio.component';
import { ComVisualComponent } from './com-visual/com-visual.component';
import { Design3dComponent } from './design3d/design3d.component';
import { HomeComponent } from './home/home.component';


const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent,  data: { state: 'home'}},
    {path: 'design', component: DesignComponent,  data: { state: 'about'}},
    {path: 'photo-video', component: PhotoVideoComponent,  data: { state: 'photo-video'}},
    {path: 'web-design', component: WebDesignComponent,  data: { state: 'web-design'}},
    {path: 'audio', component: AudioComponent,  data: { state: 'audio'}},
    {path: 'com-visual', component: ComVisualComponent, data: { state: 'com-visual'}},
    {path: '3d', component: Design3dComponent,  data: { state: '3d'}},
    { path: '**', component: HomeComponent, data: { state: 'home'} }
  ];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});