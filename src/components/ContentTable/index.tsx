import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, injectIntl } from "gatsby-plugin-intl"

const ContentTable = ({ rows, title, intl: { formatMessage }  }: Props) => (
  <div>
    <h6 className="mt-3 mb-3 text-uppercase">{title}</h6>
    <Table striped bordered size="sm">
      <tbody>
        {rows.map(({ label, link, file }, index) => (
          <tr key={index}>
            <td style={{ verticalAlign: 'middle' }}>{label}</td>

            <td className="text-right">
              {link && (
                <Button as={Link} to={link} size="sm" variant="link">
                  {formatMessage({id: "GENERAL__view" })} {" "}
                  <FontAwesomeIcon icon={faEye} className="text-dark" />
                </Button>
              )}

              {file && (
                <Button href={file} target="_blank" size="sm" as="a" variant="link">
                  {formatMessage({id: "GENERAL__download" })} {" "}
                  <FontAwesomeIcon icon={faFilePdf} className="text-danger" />
                </Button>
                )}
              </td>

          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

interface Props {
  intl: any,
  title: string;
  rows: {
    label: string;
    link?: string;
    file?: string;
  }[]
};

export default injectIntl(ContentTable)



