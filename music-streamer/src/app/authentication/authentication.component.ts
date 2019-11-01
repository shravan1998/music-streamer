import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
