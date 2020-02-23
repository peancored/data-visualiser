import React from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { Props } from './types';
import data from '../../../data/all.json';

const DataTable: React.FunctionComponent = (props: Props) => {
  const displayedColumns = [
    {
      label: "Department Family",
      dataKey: "departmentFamily"
    },
    {
      label: "Entity",
      dataKey: "entity"
    },
    {
      label: "Date",
      dataKey: "date"
    },
    {
      label: "Expense Type",
      dataKey: "expenseType"
    },
    {
      label: "Expense Area",
      dataKey: "expenseArea"
    },
    {
      label: "Supplier",
      dataKey: "supplier"
    },
    {
      label: "Transaction Number",
      dataKey: "transactionNumber"
    },
    {
      label: "Amount",
      dataKey: "amount"
    },
    {
      label: "Invoice Currency Unit",
      dataKey: "invoiceCurrencyUnit"
    }
  ];

  const columns = displayedColumns.map((displayedColumn, index) => (
    <Column key={index} label={displayedColumn.label} dataKey={displayedColumn.dataKey} width={300} />
  ));

  return (
    <div>
      <Table
          width={900}
          height={300}
          headerHeight={20}
          rowHeight={30}
          rowCount={data.length}
          rowGetter={({index}) => data[index]}>
          {columns}
        </Table>
    </div>
  );
};

export default DataTable;
