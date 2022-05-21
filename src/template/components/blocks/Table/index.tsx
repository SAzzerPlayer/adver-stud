import React from "react";
import { TTableBlock, TTableBlockColumn } from "src/types";
import Styles from "./styles";
import { breakpoints } from "src/styles";
import Table from "./UIComponent";
import { useCurrentBreakpoint } from "../../../../styles/hooks";

const TableBlock: React.FC<TTableBlock> = ({ numerateRows, columns }) => {
  const breakpoint = useCurrentBreakpoint();

  const tables = React.useMemo(() => {
    const arr: TTableBlockColumn[][] = [[]];
    const maxAmount = (() => {
      if (breakpoint === "device") return 2;
      if (breakpoint === "laptop") return 4;
      return 7;
    })();
    for (let i = 0; i < columns.length; i++) {
      if (i > 0 && i % maxAmount === 0) {
        arr.push([]);
      }
      arr[arr.length - 1][i % maxAmount] = columns[i];
    }
    return arr;
  }, [columns, breakpoint]);

  return (
    <Styles.Container>
      {tables.map((columns, index) => (
        <Table key={index} numerateRows={numerateRows} columns={columns} />
      ))}
    </Styles.Container>
  );
};

export default TableBlock;
