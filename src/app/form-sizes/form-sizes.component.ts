import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-sizes',
  templateUrl: './form-sizes.component.html',
  styleUrls: ['./form-sizes.component.css'],
})
export class FormSizesComponent {
  sizes = [{ name: 'SMALL' }, { name: 'MEDIUM' }, { name: 'LARGE' }];
}
