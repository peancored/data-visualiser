import React from "react";
import { Column, Table, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";
import { Props } from "./types";
import { Wrapper } from "./styles";

const DataTable: React.FunctionComponent<Props> = (props: Props) => {
  const { data, displayedColumns, className } = props;

  const columns = displayedColumns.map((displayedColumn, index) => (
    <Column
      key={index}
      label={displayedColumn.label}
      dataKey={displayedColumn.dataKey}
      width={300}
    />
  ));

  return (
    <Wrapper className={className}>
      <AutoSizer>
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={20}
            rowHeight={30}
            rowCount={data.length}
            rowGetter={({ index }) => data[index]}
          >
            {columns}
          </Table>
        )}
      </AutoSizer>
    </Wrapper>
  );
};

export default DataTable;
