import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 showMenu = signal(false);
 activatedRoute = inject(ActivatedRoute);
 destroyRef = inject(DestroyRef);


 constructor() {
  this.activatedRoute.fragment.pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe((fragment) => {
    console.log(fragment)
  })
 }
}
