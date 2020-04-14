import { Component } from '@angular/core';
import {
  TableView,
  TextView,
  TimestampView,
} from '../../../../../../../src/app/modules/shared/models/content';

const name: TextView = {
  metadata: {
    type: 'text',
  },
  config: {
    value: 'ENV_VAR',
  },
};

const age: TimestampView = {
  config: {
    timestamp: 1586469079,
  },
  metadata: {
    type: 'timestamp',
  },
};

const view: TableView = {
  config: {
    columns: [
      {
        name: 'Name',
        accessor: 'Name',
      },
      {
        name: 'Age',
        accessor: 'Age',
      },
    ],
    rows: [
      {
        Name: name,
        Age: age,
      },
    ],
    emptyContent: 'Empty content placeholder',
    loading: false,
    filters: null,
  },
  metadata: {
    type: 'table',
  },
};

const code = `table component
`;

@Component({
  selector: 'app-angular-table-demo',
  templateUrl: './angular-table.demo.html',
})
export class AngularTableDemoComponent {
  view = view;
  code = code;
}
