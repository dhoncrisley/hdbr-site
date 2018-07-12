import { RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { PhotoVideoComponent } from './photo-video/photo-video.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AudioComponent } from './audio/audio.component';
import { ComVisualComponent } from './com-visual/com-visual.component';
import { Design3dComponent } from './design3d/design3d.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';


const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 0 } },
  {
    path: 'photo-video',
    component: PhotoVideoComponent,
    children: [
      { path: '', component: ContentComponent, outlet: 'videooutlet', data: { state: 7 } }
     
    ],
    data: { state: 1 }
  },
  { path: 'web-design', component: WebDesignComponent, data: { state: 2 } },
  { path: 'audio', component: AudioComponent, data: { state: 3 } },
  { path: 'design', component: DesignComponent, data: { state: 4 } },
  { path: 'com-visual', component: ComVisualComponent, data: { state: 5 } },
  { path: '3d', component: Design3dComponent, data: { state: 6 } },
  { path: '**', component: HomeComponent, data: { state: 0 } }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true,
  onSameUrlNavigation: 'reload'
});