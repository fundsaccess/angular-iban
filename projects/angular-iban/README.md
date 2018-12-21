# Angular-iban

Directives and pipes for Angular 

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
```js
import { AngularIbanModule } from 'angular-iban';

@NgModule({
  declarations: [],
  imports: [AngularIbanModule], 
})
export class Module {
}
```

## Usage

### IBAN Validator
```html
<form name="form" novalidate>
  <div class="form-group row">
    <label for="iban" class="col-sm-2 col-form-label">Input your IBAN:</label>
    <div class="col-sm-4">
      <input id="iban" name="iban" class="form-control" #iban="ngModel" type="text" ibanValidator [(ngModel)]="testIban" [ngModelOptions]="{standalone: true}" placeholder="IBAN" required autocomplete="off">
    </div>
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

### IBAN Formatter
```html
<p>{{testIban | ibanFormatter}}</p>
```

## Demo

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

Copyright (c) 2018 fundsaccess AG. Licensed under the MIT License (MIT)


