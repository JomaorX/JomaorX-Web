import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
