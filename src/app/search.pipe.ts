import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listItems: any[], txt:any): any[] {
    if (!listItems) return [];
    if (!txt) return listItems;
    txt = txt.toLowerCase();
    return listItems.filter( item => {
      return item.title.toLowerCase().includes(txt);
    });
  }

}
