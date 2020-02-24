import React from "react";
import {
  BarChart as BarChartRecharts,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer
} from "recharts";

import { Props } from "./types";
import groupBy from "lodash-es/groupBy";
import { Transaction } from "../../../types/transaction";

const BarChart: React.FunctionComponent<Props> = (props: Props) => {
  const { data } = props;

  const groupedData = groupBy(data, "expenseType");

  delete groupedData[""];

  const processedData = Object.keys(groupedData).map(key => {
    return {
      expenseType: key,
      totalAmount: groupedData[key]
        .reduce((sum: number, obj: Transaction) => obj.amount + sum, 0)
        .toFixed(0)
    };
  });

  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <BarChartRecharts
        width={1000}
        height={300}
        data={processedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="expenseType" />
        <YAxis domain={[0, 1000000]} />
        <Tooltip
          formatter={value =>
            `£${new Intl.NumberFormat("en").format(parseInt(value as string))}`
          }
        />
        <Bar dataKey="totalAmount" fill="#8884d8" />
      </BarChartRecharts>
    </ResponsiveContainer>
  );
};

export default BarChart;
