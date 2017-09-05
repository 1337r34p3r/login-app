import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()

export class UserLists{
    constructor(){

    }

    private urlList= [{        
        "username": "shubhrit",        
        "password": "shubhrit"    
    }, {        
        "username": "akshay",        
        "password": "akshay"    
    }];

    loginList(){
        return this.urlList;
    }

    
}


