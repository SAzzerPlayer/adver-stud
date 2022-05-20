import { TTableBlockColumn } from "../../../../types";
import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import { colors } from "../../../../styles";
import Styles from "./styles";

interface ITableProps {
  numerateRows: boolean;
  columns: TTableBlockColumn[];
}

const Table: React.FC<ITableProps> = ({ columns, numerateRows }) => {
  const [rows, setRows] = React.useState<React.ReactNode[][]>([]);

  React.useLayoutEffect(() => {
    const newRows: typeof rows = [];
    for (let i = 0; i < columns.length; i++) {
      let j = 0;
      renderRichText(
        {
          raw: columns[i].content.raw,
          references: [],
        },
        {
          renderNode: {
            [BLOCKS.LIST_ITEM]: (node, children) => {
              if (Array.isArray(newRows[j])) {
                newRows[j][i] = children;
              } else {
                newRows[j] = [];
                for (let z = 0; z < columns.length; z++) {
                  newRows[j][z] = z === i ? children : null;
                }
              }
              j++;
              return null;
            },
          },
        }
      );
    }
    setRows(newRows);
  }, [columns]);

  return (
    <Styles.Table>
      {(numerateRows || columns.find((c) => !!c.title)) && (
        <thead>
          <tr>
            {numerateRows && <th>№</th>}
            {columns.map(({ title }, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {numerateRows && <td>{rowIndex + 1}</td>}
            {row
              .reduce<{ render: React.ReactNode; colSpan: number }[]>(
                (arr, item, index) => {
                  if (index !== 0) {
                    if (
                      JSON.stringify(arr[arr.length - 1].render) ===
                      JSON.stringify(item)
                    ) {
                      arr[arr.length - 1].colSpan += 1;
                    } else {
                      arr.push({
                        render: item,
                        colSpan: 1,
                      });
                    }
                  } else {
                    arr.push({ render: item, colSpan: 1 });
                  }
                  return arr;
                },
                []
              )
              .map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  colSpan={column.colSpan}
                  style={{
                    background: column.render
                      ? colors.tintYellow
                      : "transparent",
                    textAlign: (() => {
                      if (columns[columnIndex]?.align === "left") {
                        return "left";
                      } else if (columns[columnIndex]?.align === "right") {
                        return "right";
                      }
                      return "center";
                    })(),
                  }}
                >
                  {column.render}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </Styles.Table>
  );
};

export default Table;
