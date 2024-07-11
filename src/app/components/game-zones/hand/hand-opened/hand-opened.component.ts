import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from '@components/card';
import { DisplayHandService } from '../common/services';

@Component({
  selector: 'app-hand-opened',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './hand-opened.component.html',
  styles: `
    :host {
      height: 100%;
      display: grid;
      place-content: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandOpenedComponent {
  readonly #displayHandService = inject(DisplayHandService);

  // TODO: Replace with actual card IDs coming from a service
  protected readonly cardIds = [
    '0XYvRd7oD',
    '1XYvRd7oD',
    '2XYvRd7oD',
    '3XYvRd7oD',
    '4XYvRd7oD',
    '5XYvRd7oD',
    '6XYvRd7oD',
    '7XYvRd7oD',
  ] as const;

  protected hideHand(): void {
    this.#displayHandService.hideHand();
  }
}
