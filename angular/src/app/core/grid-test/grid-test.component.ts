import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}
@Component({
    selector: 'app-grid-test',
    templateUrl: './grid-test.component.html',
    styleUrl: './grid-test.component.scss'
})

export class GridTestComponent {
    themeClass = "ag-theme-quartz";

    // Row Data: The data to be displayed.
    rowData: IRow[] = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
        { make: 'Fiat', model: '500', price: 15774, electric: false },
        { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    ];

    // Column Definitions: Defines & controls grid columns.
    colDefs: ColDef<IRow>[] = [
        {
            field: "make", filter: 'agTextColumnFilter', floatingFilter: true,
            suppressSizeToFit: true
        },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ];
}
