import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import {IonicStorageModule} from '@ionic/storage';
import {StreamingMedia} from '@ionic-native/streaming-media/ngx';
import { PopemailPageModule } from './popover/popemail/popemail.module';
import { PopstdPageModule } from './popover/popstd/popstd.module';
import { PopratePageModule } from './popover/poprate/poprate.module';
import { PopreportPageModule } from './popover/popreport/popreport.module';
import {PopaccPageModule} from './popover/popacc/popacc.module';
import { PopconPageModule } from './popover/popcon/popcon.module';
import { PopaddPageModule } from './popover/popadd/popadd.module';



@NgModule({
  declarations: [AppComponent, FilterPipe],
  entryComponents: [],
  imports: [
    HttpClientModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    //popup
   PopemailPageModule,
   PopstdPageModule,
   PopratePageModule,
   PopreportPageModule,
   PopaccPageModule,
   PopconPageModule,
   PopaddPageModule,      
   
    FormsModule, ReactiveFormsModule
    
  ],
  providers: [AuthGuard,
    StatusBar,
    SplashScreen,
    HttpModule,
    ShareService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ,StreamingMedia
    
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule {}
