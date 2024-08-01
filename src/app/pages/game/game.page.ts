import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BoardComponent } from '@components/board';
import { HandZoneComponent } from '@components/game-zones/hand-zone';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent, HandZoneComponent],
  templateUrl: './game.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePageComponent {}
