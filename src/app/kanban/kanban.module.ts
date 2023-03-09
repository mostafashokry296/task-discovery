import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [KanbanComponent],
  imports: [CommonModule, KanbanRoutingModule, MatButtonModule],
})
export class KanbanModule {}
