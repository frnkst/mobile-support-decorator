import { Component } from '@angular/core';
import {nativeMobileSupport} from './decorator/nativeMobileSupportDecorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobile-support-decorator';

  constructor() {
    console.log('function is not on window: ', (window as any).mobileSupport.downloadFile);
    this.downloadFile('myFile.xsls', 5);
    console.log('function is on window: ', (window as any).mobileSupport.downloadFile);
  }

  @nativeMobileSupport
  downloadFile(name: string, id: number) {
    console.log('do the file download: ', name, id);
    return 'return';
  }

  @nativeMobileSupport
  doSomethingElse() {
    console.log('doing something else');
  }
}
