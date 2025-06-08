import { NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '@models/field-types.interface';
import { FieldTypesService } from '@services/field-types.service';

@Component({
  selector: 'app-form-field',
  imports: [NgComponentOutlet],
  template: `
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-black cursor-pointer">
      <ng-container [ngComponentOutlet]="previewComponent()" [ngComponentOutletInputs]="{ field: field() }"></ng-container>
    </div>
  `,
  styles: ``,
})
export class FormFieldComponent {
  field = input.required<FormField>();

  #fieldTypeService = inject(FieldTypesService);

  previewComponent = computed(() => {
    const type = this.#fieldTypeService.getFieldType(this.field().type);
    return type?.component ?? null;
  });
}
