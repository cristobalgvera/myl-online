import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments';
import { CardDto } from '../dtos';

@Injectable({ providedIn: 'root' })
export class CardService {
  readonly #httpClient = inject(HttpClient);

  getCardById(id: string): Observable<CardDto> {
    return (
      this.#httpClient
        // TODO: Validate URL when there is a real API
        .get<CardDto>(`${environment.cardsApiUrl}/v1/images/${id}`, {
          context: withCache(),
        })
        .pipe(
          catchError((error: unknown) => {
            if (error instanceof HttpErrorResponse) {
              console.error(`Failed to get card by ID: ${id}`);
              console.error(error.message);
            }

            return of({ id, url: 'assets/images/back-card.webp' });
          }),
        )
    );
  }
}
