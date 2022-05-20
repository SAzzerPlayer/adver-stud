import { TTableBlockColumn } from "../../../../types";
import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

interface ITableProps {
  numerateRows: boolean;
  columns: TTableBlockColumn[];
}

const Table: React.FC<ITableProps> = ({ columns, numerateRows }) => {
  const [titles, setTitles] = React.useState<string[]>([]);
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
              console.log(node);
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
    setTitles(columns.map(({ title }) => title));
  }, [columns]);

  return (
    <table>
      {(numerateRows || titles.find((t) => !!t)) && (
        <thead>
          <tr>
            {numerateRows && <th>№</th>}
            {titles.map((title, index) => (
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
                  style={
                    !column.render ? { background: "transparent" } : undefined
                  }
                >
                  {column.render}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
