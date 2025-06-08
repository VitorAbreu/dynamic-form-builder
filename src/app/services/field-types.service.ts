import { Injectable } from '@angular/core';
import { CheckboxFieldComponent } from '@components/field-types/checkbox-field/checkbox-field.component';
import { TextFieldComponent } from '@components/field-types/text-field/text-field.component';
import { iFieldTypeDefinition } from '@models/field-types.interface';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false,
  },
  component: TextFieldComponent,
};

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox',
    required: false,
  },
  component: CheckboxFieldComponent,
};

@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {
  fieldTypes = new Map<string, iFieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  getFieldType(type: string): iFieldTypeDefinition | undefined {
    return this.fieldTypes.get(type);
  }

  getAllFieldTypes(): iFieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }
}
