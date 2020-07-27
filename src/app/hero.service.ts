import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes() {
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }
}
