import { Type } from '@angular/core';

export interface iFieldTypeDefinition {
  type: string;
  label: string;
  icon: string;
  defaultConfig: any;
  component: Type<unknown>;
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  inputType?: string;
}
