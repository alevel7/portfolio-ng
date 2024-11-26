import { NgClass } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";
import { GeneralService } from '../../service/general.service';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, PortfolioComponent, ContactComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  service = inject(GeneralService);

  profileData = toSignal(this.service.getData());
  socials = computed(() => this.profileData()?.socials);


  constructor() {
    this.activatedRoute.fragment.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((fragment) => {
        if (fragment) this.jumpToSection(fragment);
      })
  }

  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
