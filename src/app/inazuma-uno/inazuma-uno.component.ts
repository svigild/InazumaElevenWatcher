import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inazuma-uno',
  templateUrl: './inazuma-uno.component.html',
  styleUrls: ['./inazuma-uno.component.css']
})
export class InazumaUnoComponent implements OnInit {

  playlistId = 'PLSXT4sOipmuwsXNysEGhdkgSa2jZ3ASr-';
  videos: any[] = [];
  ascendingOrder: boolean = true;

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.fetchPlaylistVideos();
  }

  fetchPlaylistVideos(): void {
    const apiKey = 'AIzaSyDFYyU-idxx6Jo7SkBH3MoN79gYmAIQx5o';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.playlistId}&maxResults=27&key=${apiKey}`;
  
    this.http.get(url).subscribe((response: any) => {
      this.videos = response.items.map((item: any) => {
        const snippet = item.snippet;
        const description = this.extractFirstParagraph(snippet.description); 
        const title = snippet.title.replace('Inazuma Eleven Castellano', '-'); 
        return { ...snippet, title, description };
      });
    });
  }

  // Helper function to extract the first paragraph from description
  extractFirstParagraph(description: string): string {
    const paragraphs = description.split('\n\n'); // Split by double newline
    return paragraphs[0];
  }

   toggleOrder(): void {
    this.ascendingOrder = !this.ascendingOrder; // Cambiar el valor de la variable
    this.videos.reverse(); // Invertir el orden de los videos
  }

}