import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverPageModule } from './page/popover/popover.module';
import { ModalPageModule } from './page/modal/modal.module';
import { RecenterPage } from './page/recenter/recenter.page';
import { RecenterPageModule } from './page/recenter/recenter.module';
import { WaypointPageModule } from './page/waypoint/waypoint.module';
import { MarkerPageModule } from './page/marker/marker.module';

@NgModule({
  declarations: [AppComponent,
    ],
  entryComponents: [RecenterPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    PopoverPageModule,
    ModalPageModule,
    RecenterPageModule,
    WaypointPageModule,
    MarkerPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
