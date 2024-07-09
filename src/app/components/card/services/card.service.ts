import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { environment } from 'src/environments';
import { CardDto } from '../dtos';

@Injectable({ providedIn: 'root' })
export class CardService {
  readonly #httpClient = inject(HttpClient);

  getCardById(id: string): Observable<CardDto> {
    // TODO: Remove when there is a real API
    // eslint-disable-next-line no-console
    console.log('Getting card by ID:', id);

    return (
      this.#httpClient
        // TODO: Validate URL when there is a real API
        .get<CardDto>(`${environment.cardsApiUrl}/v1/images/${id}`)
        .pipe(
          catchError((error: unknown) => {
            if (error instanceof HttpErrorResponse) {
              console.error(`Failed to get card by ID: ${id}`);
              console.error(error.message);
            }

            return of({ id, url: 'assets/images/back-card.webp' });
          }),
          shareReplay({ bufferSize: 1, refCount: true }),
        )
    );
  }
}
