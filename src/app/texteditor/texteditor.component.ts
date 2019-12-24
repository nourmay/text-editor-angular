import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { ContentService } from "../content.service";
import { Content } from "../content";
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {PagecontentComponent} from "../pagecontent/pagecontent.component";

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.scss']
})
export class TextEditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string
  @ViewChild(PagecontentComponent, {static: false}) PageContent;
  res: any;

  constructor(private contentservice:ContentService,private router: Router) { }
  contentdata=new Content();

  ngOnInit() {
    this.Getcontent()
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }
  onSubmit()
  {
    debugger;
    debugger;
    this.contentservice.AddUpdateContent(this.contentdata).subscribe((data : any) => {
      debugger;
      alert("Data saved Successfully");
      this.router.navigate(['/Post']);

    }, error => {

      alert("There was an error, try again");

    })
  }
  Getcontent()
  {
    this.contentservice.Getcontent().subscribe((data:any)=>{
      this.res=data;
      console.log(this.res);
    })
  }
}
