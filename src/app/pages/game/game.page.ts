import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BoardComponent } from '@components/board';
import { HandZoneComponent } from '@components/game-zones/hand/hand-zone';
import { DisplayHandService } from '@components/game-zones/hand/services';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, BoardComponent, HandZoneComponent],
  templateUrl: './game.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePageComponent {
  readonly #displayHandService = inject(DisplayHandService);

  protected readonly $isDisplayingHand = toSignal(
    this.#displayHandService.isDisplayingHand$,
  );
}
