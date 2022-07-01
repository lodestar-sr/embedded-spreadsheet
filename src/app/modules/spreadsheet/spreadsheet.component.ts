import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {ColDef, ValueParserParams} from "ag-grid-community/dist/lib/entities/colDef";
import {formatColumnHeader, getColumnIndex} from "@shared/helpers/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
})
export class SpreadsheetComponent implements OnInit, OnDestroy {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  @Input('$export') $export: Observable<any>;

  gridOptions: GridOptions;
  columns: ColDef[];
  data = [];

  constructor() {
  }

  ngOnInit(): void {
    this.gridOptions = {
      statusBar: {
        statusPanels: [
          { statusPanel: 'agAggregationComponent', align: 'right' }
        ]
      },
      enableCellChangeFlash: true,
      animateRows: true,
      enableRangeSelection: true,
      suppressMovableColumns: true,
      rowSelection: 'multiple',
    };

    this.columns = [
      { colId: 'no', headerName: '', field: 'no', width: 70, cellClass: 'disabled' },
    ];
    for (let i = 0; i < 100; i ++) {
      this.columns.push({
        colId: i.toString(),
        headerName: formatColumnHeader(i),
        field: i.toString(),
        width: 100,
        filter: true,
        resizable: true,
        editable: true,
        singleClickEdit: true,
        valueParser: (params: ValueParserParams) => {
          let value: string = params.newValue;
          try {
            if (value.startsWith('=')) {
              value = value.replace(/[a-zA-Z]+\d+/g, (item) => {
                const match = /([a-zA-Z]+)(\d+)/g.exec(item);
                const col = getColumnIndex(match[1]);
                const row = Number(match[2]) - 1;
                return this.data[row][col];
              });
              value = eval(value.substr(1));
            }
          } catch {
            value = params.newValue;
          }
          return value;
        }
      });
    }

    this.data = [];
    for (let i = 0; i < 100; i ++) {
      this.data.push({ no: i + 1 });
    }

    this.$export.subscribe(() => {
      this.exportToCSV();
    });
  }

  ngOnDestroy(): void {
  }

  exportToCSV(): void {
    this.agGrid.api.exportDataAsCsv({
      skipHeader: true,
      columnKeys: this.columns.slice(1).map((col) => col.colId),
    });
  }
}
