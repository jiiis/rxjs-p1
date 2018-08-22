import {Observable} from "rxjs/Observable";
import {Observer, Subject, Subscription} from "rxjs/Rx";
import 'rxjs/add/operator/share';
import {addItem} from "./utils";

////////// Observable and Observer //////////
// const observable: Observable<string> = Observable.create((observer: Observer<string>) => {
//     try {
//         observer.next('How are you?');
//
//         setInterval(() => {
//             observer.next('I am good!');
//         },2000);
//
//         // observer.complete();
//     } catch(error) {
//         observer.error(error.message);
//     }
// }).share();
//
// const subscription: Subscription = observable.subscribe(
//     (item: string) => addItem(item),
//     (error: string) => addItem(error),
//     () => addItem('Completed!')
// );
//
// setTimeout(() => {
//     const subscription3: Subscription = observable.subscribe((item: string) => addItem(`From subscription 3: ${item}`));
// }, 1000);
//
// const subscription2: Subscription = observable.subscribe((item: string) => addItem(`From subscription 2: ${item}`));
//
// // Adds a tear down to be called during the unsubscribe() of this Subscription.
// subscription.add(subscription2);
//
// setTimeout(() => subscription.unsubscribe(), 6000);

////////// Subject //////////
// class Subject<T> extends Observable implements SubscriptionLike
const subject = new Subject;

// A subject acts like an observable as we can subscribe to it.
const subscription1 = subject.subscribe((item: string) => addItem(`Subject subscription 1: ${item}`));

// A subject acts like an observer too.
subject.next('first');

const subscription2 = subject.subscribe((item: string) => addItem(`Subject subscription 2: ${item}`));

subject.next('second');

subscription2.unsubscribe();

subject.next('third');
