import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlService } from '../../services/url-shortener.service'

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {
  newUrl = '';
  status = {
    shortened: false,
    waiting: true,
  }
  errorMessage = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private url: UrlService) { }  //create instance
  ngOnInit() {
    let code = this.activatedRoute.snapshot.params.code;

    if (code) {
      this.url.getData(code).subscribe(
        response => {
          window.location.href = response.toString();
        },
        error => {
          console.log(error);
          this.router.navigate(['error/page-not-found'])
        });
    } else {
      this.status.waiting = false;
    }
  }

  copyShortLink() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.newUrl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  onTextChange() {
    this.status.shortened = false;
    this.errorMessage = '';
  }

  submit() {
    this.url.generateUrl({ longUrl: this.newUrl }).subscribe(
      response => {
        const parsedUrl = new URL(window.location.href);
        const baseUrl = parsedUrl.origin;

        this.status.shortened = true;
        this.newUrl = `${baseUrl}/${response.shortUrl}`;
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }
}
