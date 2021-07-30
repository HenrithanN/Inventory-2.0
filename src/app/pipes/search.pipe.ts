import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], pesquisa: any) {
    pesquisa = pesquisa
    .trim()
    .toLowerCase();

    if ( pesquisa ){
      return items.filter( item =>
        item.nome
        .toLowerCase()
        .includes(pesquisa)
        );
    } else {
      return items;
    }
}
}
