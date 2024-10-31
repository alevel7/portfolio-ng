import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, NgClass, PortfolioComponent, ContactComponent, ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 activatedRoute = inject(ActivatedRoute);
 destroyRef = inject(DestroyRef);


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
