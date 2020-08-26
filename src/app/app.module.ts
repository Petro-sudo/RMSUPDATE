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
//popup
import { PopemailPageModule } from './popover/popemail/popemail.module';
import { PopstdPageModule } from './popover/popstd/popstd.module';
import { PopratePageModule } from './popover/poprate/poprate.module';
import { PopreportPageModule } from './popover/popreport/popreport.module';
import {PopaccPageModule} from './popover/popacc/popacc.module';
import { PopconPageModule } from './popover/popcon/popcon.module';
import { PopaddPageModule } from './popover/popadd/popadd.module';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { HelpadminPageModule } from './popover/helpadmin/helpadmin.module';
import { PoppropPageModule } from './popover/popprop/popprop.module';
import { SendmailPageModule } from './popover/sendmail/sendmail.module';
import { NgSrcModule } from 'ng-src';
//img
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera,CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { LordpostissuesPageModule } from './popover/lordpostissues/lordpostissues.module';
import { LordpostqueryPageModule } from './popover/lordpostquery/lordpostquery.module';
//import { FilePath } from '@ionic-native/file-path/ngx';

@NgModule({
  declarations: [AppComponent, 
    FilterPipe, ConfirmEqualValidatorDirective
    
  ],
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
   HelpadminPageModule, 
   PoppropPageModule,
   SendmailPageModule,
   LordpostissuesPageModule,
   LordpostqueryPageModule,
   NgSrcModule,
    

    FormsModule, ReactiveFormsModule
    
  ],
  providers: [AuthGuard,
    StatusBar,
    SplashScreen, 
    HttpModule,
    ShareService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ,StreamingMedia ,Camera, File, WebView
    
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule {}
