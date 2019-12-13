import React, { ReactNode } from 'react';
import { Table } from 'react-bootstrap';

const ContentTable = ({ headers, rows, title }: Props) => (
  <div>
    <h6 className="mt-3 mb-3 text-uppercase">{title}</h6>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>{headers[0]}</th>
          <th className="text-center">{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ label, link }, index) => (
          <tr key={index}>
            <td>{label}</td>
            <td className="text-center">{link}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

interface Props {
  title: string;
  headers: string[];
  rows: {
    label: string;
    link: ReactNode
  }[]
};

export default ContentTable



