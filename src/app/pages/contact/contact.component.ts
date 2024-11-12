import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  service = inject(GeneralService);

  profileData = toSignal(this.service.getData());
  socials = computed(() => this.profileData()?.socials);
}
