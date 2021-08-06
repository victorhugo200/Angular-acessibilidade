import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { EventEmitter } from 'events';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})

// Devo utilizar um fowardRef quando declaramos uma injectionToken porém ela não é definida
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string = null;
  @Input() public label: string = '';
  @Output() public valueChange = new EventEmitter();
  public options = YesNoButtonHroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() { }


  ngOnInit(): void {
  }

  // altera os dados na view
  public writeValue(value: string): void {
    this.value = value;
    console.log({value});
    this.onChange(value);
    this.valueChange.emit(value);
  
  }
  // Registra uma mudança no formulario
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onChange = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  

  public activate(value: string):void {
    this.writeValue(value);
  }

}

enum YesNoButtonHroupOptions {
  YES = 'yes',
  NO = 'no'
}
