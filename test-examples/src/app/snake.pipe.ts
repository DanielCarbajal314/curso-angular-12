import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snake'
})
export class SnakePipe implements PipeTransform {

  transform(html?: string, ...args: unknown[]): unknown {
    const xmlTagRegex = /(<([^>]+)>)/ig;
    const multipleSpaceRegex = /\s+/g;
    return html?.replace(xmlTagRegex , ' ')
      .replace(multipleSpaceRegex, " ")
      .trim() ?? '';
  }

  // '<div>AAA</div>' => 'AAA'

  // '<div><a>AAA</a></div>' => 'AAA'

  // '<div><a>AAA</a></div><div><a>AAA</a></div>' => 'AAA AAA'
}
