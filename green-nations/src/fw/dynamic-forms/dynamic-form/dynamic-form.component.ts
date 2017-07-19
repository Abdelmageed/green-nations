import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FieldDefinition } from "../field-definition";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() model: any;
  @Input() modelDefinition: FieldDefinition[];
  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update = new EventEmitter();
  @Output() create = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  modelCopy: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.clearForm();

    this.route.params
      .subscribe(params => {
        this.operation = params['operation'];
        this.clearForm();
      })
  }

  ngOnChanges (changes: SimpleChanges) {
    if (changes['errorMessage'].currentValue && this.status == 'waiting') {
      this.status = '';
    }
  }

  clearForm () {
    let group = {};
    this.modelCopy = Object.assign({}, this.model);
    this.modelDefinition.forEach(field => {
      group[field.key] = field.required ? new FormControl(this.modelCopy[field.key], Validators.required) : new FormControl(this.modelCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  onBack() {
    console.log('back called');
    this.errorMessage = null;
    this.location.back();
  }


  onCancel() {
    this.onBack();
  }

  onCreate() {
    this.submitted = true;
    this.form.setValue({...this.form.value, id: 0})
    if (this.form.valid) {
      console.log(this.form.value);
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

  onEdit() {
    this.router.navigate(['../', 'edit'], {relativeTo: this.route});
  }

  onSave() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }

  onSubmit() {

  }
}
