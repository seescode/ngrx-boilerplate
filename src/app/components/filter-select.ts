import {Component, Output, Input, EventEmitter} from "@angular/core";
import {Todo} from "../common/interfaces";

@Component({
    selector: 'filter-select',
    template: `
      <div>
        <select #selectList (change)="filterSelect.emit(selectList.value)">
            <option *ngFor="let filter of filters" value="{{filter.action}}">
                {{filter.friendly}}
            </option>
        </select>
      </div>
    `
})
export class FilterSelect{
    public filters = [
        {friendly: "All", action: 2},
        {friendly: "Completed", action: 0},
        {friendly: "Active", action: 1}
    ];
    @Output() filterSelect: EventEmitter<string> = new EventEmitter<string>();
}
