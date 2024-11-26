import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../projects/angular-iban/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})

export class AppComponent {
  public title = 'angular-iban';

  public reactiveForm = new FormGroup({
    ibanReactive: new FormControl(
      null,
      [
        Validators.required,
        ValidatorService.validateIban,
      ],
    ),
  });

  public ibanGermany = 'DE12500105170648489890';

  public testIban: string;
}
