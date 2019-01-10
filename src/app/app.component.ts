import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from '../../projects/angular-iban/src/lib/services/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public title = 'angular-iban';

  public reactiveForm: FormGroup;

  public ibanReactive: FormControl;

  public ibanGermany = 'DE12500105170648489890';

  constructor(private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.ibanReactive = new FormControl(
      null,
        [Validators.required,
          ValidatorService.validateIban]
    );

    this.reactiveForm = this.fb.group({
      ibanReactive: this.ibanReactive,
    });
  }
}
