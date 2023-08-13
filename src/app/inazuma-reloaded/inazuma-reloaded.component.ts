import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inazuma-reloaded',
  templateUrl: './inazuma-reloaded.component.html',
  styleUrls: ['./inazuma-reloaded.component.css']
})
export class InazumaReloadedComponent {
  videoId = 'CB7Tp9HnazQ'; // Video ID of the specific video you want to display
  video: any = {}; // Variable to hold the video information

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchVideo();
  }

  fetchVideo(): void {
    const apiKey = 'AIzaSyDFYyU-idxx6Jo7SkBH3MoN79gYmAIQx5o';
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.videoId}&key=${apiKey}`;

    this.http.get(url).subscribe((response: any) => {
      const snippet = response.items[0].snippet;
      const description = this.extractFirstParagraph(snippet.description); // Extract first paragraph
      const title = snippet.title.replace('Inazuma Eleven Castellano', '-'); // Remove "Inazuma Eleven Castellano"
      this.video = { ...snippet, title, description };
    });
  }

  // Helper function to extract the first paragraph from description
  extractFirstParagraph(description: string): string {
    const paragraphs = description.split('\n\n'); // Split by double newline
    return paragraphs[0];
  }
}