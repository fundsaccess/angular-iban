<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://fundsaccess.github.io/angular-iban/assets/angular.svg">
</p>

# Angular-iban

Angular directives and pipes for IBAN

Demo: https://fundsaccess.github.io/angular-iban/

## Version compatibility

This library supports Angular 7+. Please check the Version compatibility below to choose the correct version to install.

| angular-iban | Angular |
|:------------:|:-------:|
|     0.2.0    |   7.x   |
|      1.x     |   8.x   |
|      2.x     |   9.x   |
|      3.x     |  10.x   |
|      4.x     |  11.x   |
|      5.x     |  12.x   |
|      6.x     |  13.x   |

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
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [AngularIbanModule], 
})
export class Module {
}
```

## Usage

### Some sample accounts
https://www.iban-bic.com/sample_accounts.html

### IBAN Validator with template driven form

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { AngularIbanModule } from 'angular-iban';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
 imports: [
     BrowserModule,
     AngularIbanModule,
     FormsModule
   ],
})
export class Module {
}
```


```html
<form name="templateDrivenForm" novalidate>
    <div class="form-group row">
      <label for="iban" class="col-sm-2 col-form-label">IBAN:</label>
      <input id="iban" name="iban" class="form-control" #iban="ngModel" type="text" ibanValidator [(ngModel)]="testIban" [ngModelOptions]="{standalone: true}" required autocomplete="off">
      <div *ngIf="iban.invalid && (iban.dirty || iban.touched)"
           class="alert alert-danger">

        <div *ngIf="iban.errors.['required']">
          IBAN is required.
        </div>
        <div *ngIf="iban.errors.['iban']">
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
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularIbanModule } from 'angular-iban';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
 imports: [
     BrowserModule,
     AngularIbanModule,
     ReactiveFormsModule,
   ],
})
export class Module {
}
```

```html
<form [formGroup]="reactiveForm" autocomplete="off" novalidate>
    <div class="form-group row">
      <label for="ibanReactive" class="col-sm-2 col-form-label">IBAN:</label>
      <input type="text" class="form-control" id="ibanReactive" name="ibanReactive" formControlName="ibanReactive" required>
    </div>

    <div *ngIf="ibanReactive.invalid && (ibanReactive.dirty || ibanReactive.touched)"
         class="alert alert-danger">

      <div *ngIf="ibanReactive.errors.['required']">
        IBAN is required.
      </div>
      <div *ngIf="ibanReactive.errors.['iban']">
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
 
https://fundsaccess.github.io/angular-iban/

or

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## License

Copyright (c) 2018 - 2021 fundsaccess AG. Licensed under the MIT License (MIT)


