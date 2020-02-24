import React, { useState, useEffect } from "react";
import { Transaction } from "../../../types/transaction";
import { TRANSACTIONS_URL } from "../../../constants/urls";
import { DisplayedColumn } from "../../../types/displayedColumn";
import { Plot, BarChart } from "../../atoms";
import { Wrapper, StyledDataTable, Header, SubHeader } from "./styles";

const Visualiser: React.FunctionComponent = () => {
  const [transactionsData, setTransactionsData] = useState([] as Transaction[]);

  const displayedColumns: DisplayedColumn[] = [
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

  useEffect(() => {
    fetch(TRANSACTIONS_URL)
      .then(response => response.json())
      .then((data: Transaction[]) => setTransactionsData(data));
  }, []);

  return (
    <Wrapper>
      <Header>Spend transactions by EPSRC</Header>
      <StyledDataTable
        data={transactionsData}
        displayedColumns={displayedColumns}
      />
      <SubHeader>Number of transactions per month</SubHeader>
      <Plot data={transactionsData} />
      <SubHeader>Money spent per expense category</SubHeader>
      <BarChart data={transactionsData} />
    </Wrapper>
  );
};

export default Visualiser;
