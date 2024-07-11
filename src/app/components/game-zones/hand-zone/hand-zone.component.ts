import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '@components/card';
import { DisplayHandService } from './services';

@Component({
  selector: 'app-hand-zone',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './hand-zone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandZoneComponent {
  readonly #displayHandService = inject(DisplayHandService);

  protected readonly $isDisplayingHand = toSignal(
    this.#displayHandService.isDisplayingHand$,
  );

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

  protected displayHand(): void {
    this.#displayHandService.displayHand();
  }
}
