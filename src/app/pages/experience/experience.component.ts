import { AfterViewInit, Component, computed, ElementRef, inject, QueryList, Signal, ViewChildren } from '@angular/core';
import { GeneralService } from '../../service/general.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {

  service = inject(GeneralService);
  profileData = toSignal(this.service.getData());
  experiences = computed(() => this.profileData()?.experience);

  timelineItems: Signal<QueryList<ElementRef>> = ViewChildren('timelineItem');

  ngAfterViewInit(): void {
    this.timelineItems().forEach((item, index) => {
      item.nativeElement.style.animationDelay = `${index * 0.3}s`;
    })
  }
}
