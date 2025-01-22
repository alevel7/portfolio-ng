import { NgClass } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  showMenu = signal(false);
  activatedRoute = inject(ActivatedRoute);
  gService = inject(GeneralService)
  role = this.gService.currentRole

}
