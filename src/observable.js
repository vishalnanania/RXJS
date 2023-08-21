import { Observable } from 'rxjs';
const obj = new Observable((observer) => {
  observer.next('hello');
  observer.error('error');
});

obj.subscribe(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);