import { Component, inject, Input, OnInit } from '@angular/core';
import { GeneralService } from '../../service/general.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true
})
export class SkillsComponent {
  @Input() role!: string | undefined;
  service = inject(GeneralService);

  currentRole = this.role ?? this.service.currentRole()

  profile = this.service.getData(this.currentRole as string)
  profileData = toSignal(this.profile);
}
