import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, injectIntl } from "gatsby-plugin-intl"

const ContentTable = ({ headers, rows, title, intl: { formatMessage }  }: Props) => (
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
        {rows.map(({ label, link, file }, index) => (
          <tr key={index}>
            <td>{label}</td>

            {link && (
              <td className="text-center">
                <Link to={link}>
                  {formatMessage({id: "GENERAL_view" })} {" "}
                  <FontAwesomeIcon icon={faEye} className="text-primary" />
                </Link>
              </td>
            )}

            {file && (
              <td className="text-center">
                <a href={file} target="_blank">
                  {formatMessage({id: "GENERAL_download" })} {" "}
                  <FontAwesomeIcon icon={faFilePdf} className="text-danger" />
                </a>
              </td>
            )}

          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

interface Props {
  intl: any,
  title: string;
  headers: string[];
  rows: {
    label: string;
    link?: string;
    file?: string;
  }[]
};

export default injectIntl(ContentTable)



