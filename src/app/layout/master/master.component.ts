import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  show=false;
  notificationBar=false;
  messagesBar=false;
  arrowHide=false;
  ArrowHide=true;
  ArrowF=false;
  Arrowf=true;

  constructor() { }

  ngOnInit(): void {
  }

}
