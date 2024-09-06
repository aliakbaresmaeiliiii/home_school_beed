import { Component } from '@angular/core';
import { RegisterComponent } from '../../auth/register/register.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { SliderComponent } from '../slider/slider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent, FooterComponent, MenuComponent, SliderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
