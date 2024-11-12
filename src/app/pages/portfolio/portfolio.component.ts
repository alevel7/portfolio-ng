import { Component, DestroyRef, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  router = inject(Router)
  destroyRef = inject(DestroyRef);
  service = inject(GeneralService);

  profileData = toSignal(this.service.getData());

  goto() {
    this.router.navigateByUrl('/portfolio')
  }
}
