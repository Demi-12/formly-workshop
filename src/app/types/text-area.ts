import { Component } from '@angular/core'
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'formly-field-text-area',
  template: `
    <mat-form-field>
      <mat-label>{{field?.props?.label}}</mat-label>
      <textarea matInput [placeholder]="field?.props?.placeholder || ''">
      </textarea>
      </mat-form-field>
  `,
})

export class FormlyFieldTextArea extends FieldType {}
