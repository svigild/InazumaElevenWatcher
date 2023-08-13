import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inazuma-outer',
  templateUrl: './inazuma-outer.component.html',
  styleUrls: ['./inazuma-outer.component.css']
})
export class InazumaOuterComponent {
  playlistId = 'PLDFwKKII3GptnwoJEJUYl1IrjlzOle9_E';
  videos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPlaylistVideos();
  }

  fetchPlaylistVideos(): void {
    const apiKey = 'AIzaSyDFYyU-idxx6Jo7SkBH3MoN79gYmAIQx5o';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.playlistId}&maxResults=40&key=${apiKey}`;
  
    this.http.get(url).subscribe((response: any) => {
      this.videos = response.items.map((item: any) => {
        const snippet = item.snippet;
        const description = this.extractFirstParagraph(snippet.description); // Extract first paragraph
        const title = snippet.title.replace('Inazuma Eleven Outer Code', ''); // Remove "Inazuma Eleven Castellano"
        return { ...snippet, title, description };
      });
    });
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

