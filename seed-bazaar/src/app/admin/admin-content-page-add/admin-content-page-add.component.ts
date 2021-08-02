import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {AdminService} from '../service/admin.service'
@Component({ 
  selector: 'app-admin-content-page-add',
  templateUrl: './admin-content-page-add.component.html',
  styleUrls: ['./admin-content-page-add.component.css']
})
export class AdminContentPageAddComponent implements OnInit {
content;
title;
url;
  constructor(private admin:AdminService) { }
  ngOnInit() {
  }
  editorConfig: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      minHeight: '200px',
};
addContent(){
  this.admin.addContent(this.content,this.url,this.title);
}
}
