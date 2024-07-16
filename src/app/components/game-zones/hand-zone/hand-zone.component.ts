import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '@components/card';
import { HandOpenedComponent } from './hand-opened';
import { CurrentHandService, DisplayHandService } from './services';

@Component({
  selector: 'app-hand-zone',
  standalone: true,
  imports: [CommonModule, CardComponent, DialogModule],
  templateUrl: './hand-zone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandZoneComponent {
  readonly #dialogService = inject(Dialog);
  readonly #destroyRef = inject(DestroyRef);
  readonly #displayHandService = inject(DisplayHandService);
  readonly #currentHandService = inject(CurrentHandService);
  readonly #breakpointObserver = inject(BreakpointObserver);

  protected readonly $currentHand = toSignal(
    this.#currentHandService.currentHand$,
  );

  protected readonly $isDisplayingHand = toSignal(
    this.#displayHandService.isDisplayingHand$,
  );

  protected displayHand(): void {
    const isLargeScreen = this.#breakpointObserver.isMatched(
      '(min-width: 1280px)',
    );

    if (isLargeScreen) return;

    this.#displayHandService.showHand();

    const dialog = this.#dialogService.open(HandOpenedComponent);

    dialog.closed.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe(() => {
      this.#displayHandService.hideHand();
    });
  }
}
