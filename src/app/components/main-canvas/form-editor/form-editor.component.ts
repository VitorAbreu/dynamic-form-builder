import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormField, iFieldTypeDefinition } from '@models/field-types.interface';
import { FormService } from '@services/form.service';

@Component({
  selector: 'app-form-editor',
  imports: [DragDropModule],
  template: `
    <div class="p-4">
      @for (row of formRows(); track row.id) {
        <div cdkDropList (cdkDropListDropped)="onDropInRow($event, row.id)" cdkDropListOrientation="mixed" class="p-5 bg-white rounded-lg border-2 border-dashed border-gray-200">
          <div>Row</div>
          <div class="flex gap-4 flex-wrap">
            @for (field of row.fields; track field.id) {
              <div class="flex-1">{{ field.label }}</div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class FormEditorComponent {
  #formService = inject(FormService);
  formRows = this.#formService.rows;

  onDropInRow(event: CdkDragDrop<string>, rowId: string) {
    if (event.previousContainer.data === 'field-selector') {
      // Add our field to the row
      const fieldType = event.item.data as iFieldTypeDefinition;
      const newField: FormField = {
        id: crypto.randomUUID(),
        type: fieldType.type,
        ...fieldType.defaultConfig,
      };

      this.#formService.addField(newField, rowId, event.currentIndex);
      return;
    }
  }
}
