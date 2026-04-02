import {
  from,
  map 
} from 'rxjs'

from([1,2,3])
  .pipe(map((value)=>value*2))
  .subscribe((value)=>{
    console.log(value)
  })