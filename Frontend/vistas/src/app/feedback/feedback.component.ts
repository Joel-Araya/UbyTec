import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../servicios/feedback.service';
import { Feedback } from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback:Feedback[]=[];

  constructor(private api:FeedbackService, private router:Router, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getFeedback().subscribe(data =>{
      this.feedback = data;
    })
  }

}
