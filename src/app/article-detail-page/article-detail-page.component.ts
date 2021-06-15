import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.css']
})
export class ArticleDetailPageComponent implements OnInit {
	articleId: string = '';
	trackingId: string = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.articleId = this.route.snapshot.paramMap.get('id') || '';
		this.route.queryParams
			.subscribe(params => this.trackingId = params.trackingId || '');
	}

	goHome(): void {
		setTimeout(() => {
			this.router.navigateByUrl('/home');
		}, 1000);
	}

}
