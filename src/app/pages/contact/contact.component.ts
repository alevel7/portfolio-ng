import { Component, computed, inject, Input, input, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GeneralService } from '../../service/general.service';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent{
  @Input() role!: string | undefined;
  service = inject(GeneralService);

  currentRole = this.role ?? this.service.currentRole()

  profile =  this.service.getData(this.currentRole as string)
  profileData = toSignal(this.profile);
  socials = computed(() => this.profileData()?.socials);

}
