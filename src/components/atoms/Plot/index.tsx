import React from "react";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer
} from "recharts";
import groupBy from "lodash-es/groupBy";
import orderBy from "lodash-es/orderBy";
import moment from "moment";
import { Props } from "./types";

const Plot: React.FunctionComponent<Props> = (props: Props) => {
  const { data } = props;

  // Order data by date, then group by month
  const orderedGroupedData = groupBy(
    orderBy(
      data,
      item => moment(item.date, "DD/MM/YYYY").format("YYYYMMDD"),
      "asc"
    ),
    item => {
      const date = moment(item.date, "DD/MM/YYYY");
      return date.isValid() ? date.format("MMMM") : "invalid";
    }
  );

  delete orderedGroupedData.invalid;

  const processedData = Object.keys(orderedGroupedData).map(key => ({
    month: key,
    numberOfTransactions: orderedGroupedData[key].length
  }));

  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <LineChart
        width={400}
        height={400}
        data={processedData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="numberOfTransactions"
          stroke="#ff7300"
          yAxisId={0}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Plot;
