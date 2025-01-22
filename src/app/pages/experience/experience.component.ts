import { AfterViewInit, Component, computed, ElementRef, inject, Input, OnInit, QueryList, Signal, ViewChildren } from '@angular/core';
import { GeneralService } from '../../service/general.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent  {
  @Input() role!: string | undefined;
  service = inject(GeneralService);

  currentRole = this.role ?? this.service.currentRole()

  profile = this.service.getData(this.currentRole as string)
  profileData = toSignal(this.profile);
  experiences = computed(() => this.profileData()?.experience);

  timelineItems: Signal<QueryList<ElementRef>> = ViewChildren('timelineItem');
}
