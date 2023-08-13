import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inazuma-tres',
  templateUrl: './inazuma-tres.component.html',
  styleUrls: ['./inazuma-tres.component.css']
})
export class InazumaTresComponent {
  playlistId = 'PLSXT4sOipmuxJ7Akn-vvP-KCFIOBazP56';
  videos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPlaylistVideos();
  }

  fetchPlaylistVideos(): void {
    const apiKey = 'AIzaSyDFYyU-idxx6Jo7SkBH3MoN79gYmAIQx5o';
    let nextPageToken = ''; // Variable para almacenar el token de página siguiente
  
    // Función recursiva para obtener todos los videos de la playlist
    const getVideos = () => {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.playlistId}&maxResults=50&pageToken=${nextPageToken}&key=${apiKey}`;
    
      this.http.get(url).subscribe((response: any) => {
        const videosFromResponse = response.items.map((item: any) => {
          const snippet = item.snippet;
          const description = this.extractFirstParagraph(snippet.description); // Extract first paragraph
          const title = snippet.title.replace('Inazuma Eleven Castellano', ''); // Remove "Inazuma Eleven Castellano"
          return { ...snippet, title, description };
        });
    
        // Agregar los videos de esta página a la lista total
        this.videos = [...this.videos, ...videosFromResponse];
    
        // Verificar si hay más páginas de resultados
        if (response.nextPageToken) {
          nextPageToken = response.nextPageToken;
          // Hacer otra solicitud para obtener la siguiente página de resultados
          getVideos();
        }
      });
    };
    
    // Llamada inicial para obtener los videos
    getVideos();
  }

  // Helper function to extract the first paragraph from description
  extractFirstParagraph(description: string): string {
    const paragraphs = description.split('\n\n'); // Split by double newline
    return paragraphs[0];
  }

ascendingOrder: boolean = true;
toggleOrder(): void {
    this.ascendingOrder = !this.ascendingOrder; // Cambiar el valor de la variable
    this.videos.reverse(); // Invertir el orden de los videos
  }
}
