import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: User[]): User[] {
    let sortColumn = 'lastName';
    return users.sort(compareFunction);

    //a & b represent an instance of an array object
    function compareFunction(a, b) {
      var x = (a[sortColumn]).toUpperCase();
      var y = (b[sortColumn]).toUpperCase();
      if(x === y) return 0;
      if (x < y)
        return -1;
      else
        return 1;
    }
  }

}
