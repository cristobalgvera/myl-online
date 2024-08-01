import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DisplayHandService {
  readonly #isDisplayingHand$ = new BehaviorSubject(false);

  readonly isDisplayingHand$ = this.#isDisplayingHand$.asObservable();

  showHand(): void {
    this.#isDisplayingHand$.next(true);
  }

  hideHand(): void {
    this.#isDisplayingHand$.next(false);
  }
}
