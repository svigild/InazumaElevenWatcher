import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inazumago-uno',
  templateUrl: './inazumago-uno.component.html',
  styleUrls: ['./inazumago-uno.component.css']
})
export class InazumagoUnoComponent {
  playlistId = 'PLSXT4sOipmuzTRcwmOkBdOwcUcCWpaoWi';
  videos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPlaylistVideos();
  }

  fetchPlaylistVideos(): void {
    const apiKey = 'AIzaSyDFYyU-idxx6Jo7SkBH3MoN79gYmAIQx5o';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.playlistId}&maxResults=70&key=${apiKey}`;
  
    this.http.get(url).subscribe((response: any) => {
      this.videos = response.items.map((item: any) => {
        const snippet = item.snippet;
        const description = this.extractFirstParagraph(snippet.description); // Extract first paragraph
        const title = snippet.title.replace('Inazuma Eleven Go Castellano', ''); // Remove "Inazuma Eleven Castellano"
        return { ...snippet, title, description };
      });
    });
  }

  // Helper function to extract the first paragraph from description
  extractFirstParagraph(description: string): string {
    const paragraphs = description.split('\n\n'); // Split by double newline
    return paragraphs[0];
  }

  filterDescription(description: string): string {

    const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;


    // Patrón para eliminar partes no deseadas de la descripción
    const unwantedPatterns = [
      /Web oficial: http:\/\/www\.inazumaeleven\.tv\/es/g,
      /Facebook oficial: http:\/\/www\.facebook\.com\/InazumaElevenES/g,
      /DESCRIPCIÓN DEL EPISODIO:/g,
      /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g,
      /\*\*Síguenos también en…[\s\S]*?Inazuma Eleven en otros idiomas: イナズマイレブン,  Inazuma Irebun, イナイレ, Super Once/g,
    ];
  
    let filteredDescription = description;
    unwantedPatterns.forEach(pattern => {
      filteredDescription = filteredDescription.replace(pattern, '');
    });
  
    // Eliminar emojis de la descripción
    filteredDescription = filteredDescription.replace(emojiPattern, '');
  
    return filteredDescription.trim();
  }

  ascendingOrder: boolean = true;
toggleOrder(): void {
    this.ascendingOrder = !this.ascendingOrder; // Cambiar el valor de la variable
    this.videos.reverse(); // Invertir el orden de los videos
  }

}
