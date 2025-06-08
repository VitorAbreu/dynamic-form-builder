import { Injectable } from '@angular/core';
import { iFieldTypeDefinition } from '@models/field-types.interface';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false,
  },
};

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox',
    required: false,
  },
};

@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {
  fieldTypes = new Map<string, iFieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  getAllFieldTypes(): iFieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }
}
