import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '@components/card';
import { CurrentHandService } from '../services';

@Component({
  selector: 'app-hand-opened',
  standalone: true,
  imports: [CardComponent, CdkDropList],
  templateUrl: './hand-opened.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandOpenedComponent {
  readonly #currentHandService = inject(CurrentHandService);

  protected readonly $currentHand = toSignal(
    this.#currentHandService.currentHand$,
  );

  // INFO: It doesn't really matter what the type of the event is.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected moveCard(event: CdkDragDrop<any>) {
    this.#currentHandService.moveCard(event.previousIndex, event.currentIndex);
  }
}
