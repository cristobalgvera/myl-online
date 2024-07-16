import { Injectable } from '@angular/core';
import { CardDto } from '@components/card';
import { BehaviorSubject } from 'rxjs';

export type CardIdDto = CardDto['id'];

@Injectable({ providedIn: 'root' })
export class CurrentHandService {
  readonly #cardIds$ = new BehaviorSubject<readonly CardIdDto[]>([]);

  readonly currentHand$ = this.#cardIds$.asObservable();

  constructor() {
    // TODO: Replace with actual card IDs
    [
      '0XYvRd7oD',
      '1XYvRd7oD',
      '2XYvRd7oD',
      '3XYvRd7oD',
      '4XYvRd7oD',
      '5XYvRd7oD',
      '6XYvRd7oD',
      '7XYvRd7oD',
    ].forEach((cardId) => {
      this.addCard(cardId);
    });
  }

  addCard(cardId: CardIdDto) {
    this.#cardIds$.next([...this.#cardIds$.value, cardId]);
  }

  removeCard(cardId: CardIdDto) {
    this.#cardIds$.next(this.#cardIds$.value.filter((id) => id !== cardId));
  }
}
