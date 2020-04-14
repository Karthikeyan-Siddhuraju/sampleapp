import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addarray: any[] = [true, false, false, true, true];

  ngOnInit() {
    var toccontent = [
      {
        "Title": "Title",
        "Description": "Title Description",
        "DesignToCList": [
          {
            "Title": "Cloud Compliance Title",
            "Description": "Title for Cloud Compliance",
            "DesignToCList": null
          },
          {
            "Title": "Multi Cloud Managment",
            "Description": "Title for the Multi Cloud Managment",
            "DesignToCList": null
          }
        ]
      }
    ]
    var toccontent1:any = [];
    for(let key in toccontent)
    {
      toccontent1.push(toccontent[key].Title );
    }
    console.log(toccontent1);

  }
 
 
  todo = [
    'Company1','Company2','Company3','Company4','Company5','Company6','Company7','Company8','Company9','Company10',
    // 'Get to work',
    // 'Pick up groceries',
    // 'Go home',
    // 'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}