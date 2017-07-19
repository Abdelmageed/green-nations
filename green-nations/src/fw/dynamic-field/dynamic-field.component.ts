import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldDefinition } from "../dynamic-forms/field-definition";

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() submitted: boolean;
  @Input() operation: string;

  constructor() { }

  getIsValid() { return this.form.controls[this.field.key].valid; }

  hasError() {
    return this.form.get(this.field.key).hasError('required') && (this.submitted || this.form.get(this.field.key).touched);
  }

  ngOnInit() {
  }

}
