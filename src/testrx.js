import { of, Observable, interval, from } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Observable
const obj = new Observable((observer) => {
    observer.next('hello');
    observer.error('error');
});

obj.subscribe(
    (value) => {
        // console.log(value);
    },
    (error) => {
        // console.log(error);
    }
);

// operators ceration 

//of
of(1, 2, 3)
    .pipe(
        map(x => x * 2)
    ).subscribe((x) => {
        // console.log(x);
    });

//interval
interval(1000).pipe(
    take(2),
    map(x => x ** 2)
).subscribe((x) => {
    // console.log(x)
})

//from

from([10, 20, 30, 40, 50])
    .pipe(
        map(x => x * 2)
    )
    .subscribe((x) => {
        console.log(x);
    })
