import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareService } from '../share/share';
import { HttpModule }from '@angular/http';

 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    
  ],
  providers: [AuthGuard,
    StatusBar,
    SplashScreen,
    HttpModule,
    ShareService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
