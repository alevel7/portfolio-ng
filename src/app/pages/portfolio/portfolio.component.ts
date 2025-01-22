import { Component, DestroyRef, inject, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @Input() role!: string | undefined;
  service = inject(GeneralService);

  currentRole = this.role ?? this.service.currentRole()

  profile = this.service.getData(this.currentRole as string)
  profileData = toSignal(this.profile);

  router = inject(Router)


  goto() {
    this.router.navigateByUrl('/portfolio')
  }
}
