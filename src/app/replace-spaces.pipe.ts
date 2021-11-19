import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces'
})
export class ReplaceSpacesPipe implements PipeTransform {
  // "Hola Daniel" => ["Hola", "Daniel"] => * => "Hola*Daniel"
  transform(value: string, ...args: string[]): unknown {
    return value.split(' ').join(args[0]);
  }
}

