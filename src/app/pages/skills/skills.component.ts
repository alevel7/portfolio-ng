import { Component, inject, OnInit } from '@angular/core';
import { GeneralService } from '../../service/general.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone:true
})
export class SkillsComponent{
  service = inject(GeneralService);
  profileData = toSignal(this.service.getData());
}
