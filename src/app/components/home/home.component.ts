import { Component, inject, signal } from '@angular/core';
import { FuturamaapiService } from '../../services/futuramaapi.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private futuramaapiService = inject(FuturamaapiService);
  page = 1;
  pages = 0;
  characters: Character[] = [];

  ngOnInit() {
    this.getCharacters();    
  }

  getCharacters() {
    this.futuramaapiService.getCharacters(this.page).subscribe({
      next:  (data)  => {
        this.characters = [...data.items];
        this.pages = data.pages;
      },
      error: (error) => console.error(error)
    });
  }

  nextPage() {
    if (this.page < this.pages) {
      this.page++;
      this.getCharacters();
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getCharacters();
    }
  }
  
}
