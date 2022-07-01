import {formatNumber} from '@angular/common';

export const duplicateObject = (obj: any): any => {
  if (typeof obj !== 'object')
    return obj;

  if (Array.isArray(obj))
    return obj.map((item) => duplicateObject(item));

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key))
      copy[key] = duplicateObject(obj[key]);
  }
  return copy;
};

export const formatFileSize = (size: number): string => {
  const units = ['', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  do {
    size /= 1024;
    i ++;
  } while (size >= 1024 && i < units.length - 1);

  return `${formatNumber(size, 'en', '0.0-2')}${units[i]}`;
};

export const formatColumnHeader = (index: number) => {
  if (!index) {
    return 'A';
  }

  let title = '';
  while (index) {
    const i = index % 26;
    title = String.fromCharCode(i + 65) + title;
    index = Math.floor(index / 26);
  }
  return title;
};

export const getColumnIndex = (title: string) => {
  title = title.toUpperCase();
  let index = 0;
  for (let i = 0; i < title.length; i ++) {
    index = index * 26 + (title.charCodeAt(i) - 65);
  }
  return index;
};
