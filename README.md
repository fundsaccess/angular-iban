<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://github.com/fundsaccess/angular-iban/src/assets/angular.svg">
</p>

# Angular-iban

Angular directives and pipes for IBAN

## Installation

npm:
```shell
npm install --save angular-iban iban
```

yarn:
```shell
yarn add angular-iban iban
```

## Import

Once installed you need to import the main module:
```typescript
import { AngularIbanModule } from 'angular-iban';

@NgModule({
  declarations: [],
  imports: [AngularIbanModule], 
})
export class Module {
}
```

## Usage

### IBAN Validator with template driven form
```html
<form name="templateDrivenForm" novalidate>
    <div class="form-group row">
      <label for="iban" class="col-sm-2 col-form-label">Input your IBAN:</label>
      <input id="iban" name="iban" class="form-control" #iban="ngModel" type="text" ibanValidator [(ngModel)]="testIban" [ngModelOptions]="{standalone: true}" required autocomplete="off">
      <div *ngIf="iban.invalid && (iban.dirty || iban.touched)"
           class="alert alert-danger">

        <div *ngIf="iban.errors.required">
          IBAN is required.
        </div>
        <div *ngIf="iban.errors.iban">
          IBAN is invalid
        </div>

      </div>
      <div *ngIf="iban.valid && (iban.dirty || iban.touched)"
           class="alert alert-danger">
        IBAN is valid.
      </div>
    </div>
  </form>
```

### IBAN Validator with reactive form
```html
<form [formGroup]="reactiveForm" autocomplete="off" novalidate>
    <div class="form-group row">
      <label for="ibanReactive" class="col-sm-2 col-form-label">Input your IBAN:</label>
      <input type="text" class="form-control" id="ibanReactive" name="ibanReactive" formControlName="ibanReactive" required>
    </div>

    <div *ngIf="ibanReactive.invalid && (ibanReactive.dirty || ibanReactive.touched)"
         class="alert alert-danger">

      <div *ngIf="ibanReactive.errors.required">
        IBAN is required.
      </div>
      <div *ngIf="ibanReactive.errors.iban">
        IBAN is invalid
      </div>

    </div>
    <div *ngIf="ibanReactive.valid && (ibanReactive.dirty || ibanReactive.touched)"
         class="alert alert-danger">
      IBAN is valid.
    </div>
  </form>
```

```typescript
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from 'angular-iban';

export class AppComponent implements OnInit {

  public reactiveForm: FormGroup;

  public ibanReactive: FormControl;

  constructor(private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.ibanReactive = new FormControl(
      null,
        [
          Validators.required,
          ValidatorService.validateIban
        ]
    );

    this.reactiveForm = this.fb.group({
      ibanReactive: this.ibanReactive,
    });
  }
}
```

### IBAN Formatter
```html
before
<p>DE12500105170648489890</p>

set pipe
<p>{{ibanGermany | ibanFormatter}}</p>

after
<p>DE12 5001 0517 0648 4898 90</p>
```

## Demo

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

Copyright (c) 2018 fundsaccess AG. Licensed under the MIT License (MIT)


