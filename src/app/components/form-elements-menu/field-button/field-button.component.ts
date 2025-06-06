import { Component, input } from '@angular/core';
import { iFieldTypeDefinition } from '@models/field-types.interface';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-field-button',
  imports: [MatIconModule, DragDropModule],
  template: `
    <button cdkDrag class="w-full p-3 border-gray-200 hover:border-black hover:shadow-md transition-shadow rounded-lg flex items-center gap-3 cursor-pointer">
      <div class="rounded-md bg-gray-100 flex items-center justify-center p-1">
        <mat-icon>{{ field().icon }}</mat-icon>
      </div>
      <span>{{ field().label }}</span>
    </button>
  `,
  styles: ``,
})
export class FieldButtonComponent {
  field = input.required<iFieldTypeDefinition>();
}
