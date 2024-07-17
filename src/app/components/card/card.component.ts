import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CardSize } from './enums';
import { CardService } from './services';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CdkDrag],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly #cardService = inject(CardService);

  readonly $cardId = input.required<string>({ alias: 'cardId' });
  readonly $size = input<CardSize>(CardSize.md, { alias: 'size' });

  protected readonly card$ = toObservable(this.$cardId).pipe(
    switchMap((cardId) => this.#cardService.getCardById(cardId)),
  );
}
