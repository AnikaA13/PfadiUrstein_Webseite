import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { StufenService } from '../../data/stufen.service';

@Component({
  selector: 'app-stufen-list',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './stufen-list.component.html',
  styleUrl: './stufen-list.component.css',
})
export class StufenListComponent {
  stufen = inject(StufenService).getAll();
}
