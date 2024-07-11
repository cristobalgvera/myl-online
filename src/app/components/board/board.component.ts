import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AttackLineZoneComponent } from '@components/game-zones/attack-line-zone';
import { DeckZoneComponent } from '@components/game-zones/deck-zone';
import { DefenseLineZoneComponent } from '@components/game-zones/defense-line-zone';
import { ExileZoneComponent } from '@components/game-zones/exile-zone';
import { GoldReserveZoneComponent } from '@components/game-zones/gold-reserve-zone';
import { GraveyardZoneComponent } from '@components/game-zones/graveyard-zone';
import { PaidGoldZoneComponent } from '@components/game-zones/paid-gold-zone';
import { SupportLineZoneComponent } from '@components/game-zones/support-line-zone';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    PaidGoldZoneComponent,
    AttackLineZoneComponent,
    GraveyardZoneComponent,
    DeckZoneComponent,
    DefenseLineZoneComponent,
    ExileZoneComponent,
    GoldReserveZoneComponent,
    SupportLineZoneComponent,
  ],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {}
