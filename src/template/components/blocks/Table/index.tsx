import React from "react";
import { TTableBlock } from "src/types";
import Styles from "./styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

const TableBlock: React.FC<TTableBlock> = ({ numerateRows, columns }) => {
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
    <Styles.Container>
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
              {row.map((item, columnIndex) => (
                <td
                  key={columnIndex}
                  style={!item ? { background: "transparent" } : undefined}
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Styles.Container>
  );
};

export default TableBlock;
