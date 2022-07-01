import {Pipe, PipeTransform} from '@angular/core';
import {formatFileSize} from '@shared/helpers/common';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  constructor() {
  }

  transform(size: number): string {
    return formatFileSize(size);
  }
}
