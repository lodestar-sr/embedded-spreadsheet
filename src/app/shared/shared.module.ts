import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FileSizePipe} from '@shared/pipes/file-size.pipe';
import {SafeHtmlPipe} from '@shared/pipes/safe-html.pipe';
import {SafeStylePipe} from '@shared/pipes/safe-style.pipe';
import {SafeUrlPipe} from '@shared/pipes/safe-url.pipe';


@NgModule({
  declarations: [
    FileSizePipe,
    SafeHtmlPipe,
    SafeStylePipe,
    SafeUrlPipe,
  ],
  exports: [
    FileSizePipe,
    SafeHtmlPipe,
    SafeStylePipe,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
})
export class SharedModule {
}
