import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions,  StreamingAudioOptions} from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-helplord',
  templateUrl: './helplord.page.html',
  styleUrls: ['./helplord.page.scss'],
})
export class HelplordPage implements OnInit {

  constructor(private streamingMedia: StreamingMedia) { }

  ngOnInit() {
  }

  startVideo(){
   let options: StreamingVideoOptions = {
     successCallback:() =>{console.log()},
     errorCallback:()=>{console.log()},
     orientation:'portrait'
   }
   this.streamingMedia.playVideo('https://r4---sn-uxa3vhn5-woce.googlevideo.com/videoplayback?expire=1587794909&ei=fX-jXtjuG72lxN8PiNiI-AE&ip=102.250.4.234&id=o-ANAoAQvxqm4_e2kVzDHblDsyaIiD_QqmEaTh6rr7lYYU&itag=18&source=youtube&requiressl=yes&mh=Ma&mm=31%2C26&mn=sn-uxa3vhn5-woce%2Csn-hc57en76&ms=au%2Conr&mv=m&mvi=3&pl=18&initcwndbps=258750&vprv=1&mime=video%2Fmp4&gir=yes&clen=3889777&ratebypass=yes&dur=234.289&lmt=1586526051884558&mt=1587773194&fvip=4&c=WEB_EMBEDDED_PLAYER&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJpPlLswRgIhAM27GQ6gKNrh1OF9E2_AHzlOL1gZYnACcZpSgRME4a_AAiEA7rl8jKkCoaBRcwWIWXSoNuPxvT4owcmzMTiv3Z32cAM%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgRxNEcg-wEPBOOxUMPWodGYtkQIeTIhFdfLYVugQ4iecCIFgW-nK7aTyFbwU2Y1GAmI8ubgtH6Nbu8AeHuh2KxcCb', options)
  }

}
