import { Component, Input } from '@angular/core';
import { PostCommentService } from './postcomment.service';



@Component({
  selector: 'postcomment',
  templateUrl: './postcomment.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],

})
export class PostCommentComponent  {
  @Input() name: string;
  @Input() course: string;
  postselect;
  commentselect;

  constructor(private postcommentService: PostCommentService) {
   
  }

  getPostPlusComments(id){
   this.postcommentService.getPostTwo()
      .toPromise()
      .then((response) => {
        var str = id;
        var num = +str;
         let arr = [];
        arr.push(response);
        const a = arr[0].filter(arr => arr.id === num);
        this.postselect = a;
         console.log(a);
      })
      .catch((error) => {
        console.error(error);
      });
  
  this.postcommentService.getCommentsForPost()
      .toPromise()
      .then((response) => {
        var str = id;
        var num = +str;
        let arr = [];
        arr.push(response);
        const a = arr[0].filter(arr => arr.postId === num);
        this.commentselect = a;
         console.log(a);
      })
      .catch((error) => {
        console.error(error);
      });
  }



}