import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements AfterViewInit {
  title = 'Kaspper';
  isLoading = false; // Indica se o vídeo está carregando
  isError = false;   // Indica se houve erro ao tentar reproduzir o vídeo
  isPlaying = false; // Indica se o vídeo está sendo reproduzido ou não

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Verificação de plataforma para evitar erros ao tentar acessar o DOM em SSR
    }
  }

  playVideo(): void {
    if (this.isPlaying || this.isLoading) return; // Evita tentar reproduzir se já estiver carregando ou reproduzindo

    const videoElement: HTMLVideoElement = <HTMLVideoElement>document.getElementById('backgroundVideo');

    if (videoElement) {
      this.isLoading = true;
      videoElement.play().then(() => {
        this.isPlaying = true;
        this.isLoading = false; // Video played successfully, loading complete
      }).catch(error => {
        this.isError = true;
        this.isLoading = false; // Video failed to play, loading complete
        console.log('Erro ao tentar reproduzir o vídeo:', error);
      });
    }
  }

  pauseVideo(): void {
    const videoElement: HTMLVideoElement = <HTMLVideoElement>document.getElementById('backgroundVideo');

    if (videoElement && this.isPlaying) {
      videoElement.pause();
      this.isPlaying = false;
    }
  }

  resetVideo(): void {
    const videoElement: HTMLVideoElement = <HTMLVideoElement>document.getElementById('backgroundVideo');

    if (videoElement) {
      videoElement.currentTime = 0; // Reseta o vídeo ao começo
      if (!this.isPlaying) {
        this.playVideo(); // Reproduz novamente se não estiver tocando
      }
    }
  }
}
