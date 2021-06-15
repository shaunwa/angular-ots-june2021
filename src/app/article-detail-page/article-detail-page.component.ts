import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.css']
})
export class ArticleDetailPageComponent implements OnInit {
	articleId: string = '';

	constructor(
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.articleId = this.route.snapshot.paramMap.get('id') || '';
	}

}
