import { injectIntl, Link } from 'gatsby-plugin-intl';
import React from 'react';

import { TH4Sans } from '@components';
import { ButtonBase, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VisibilityIcon from '@material-ui/icons/Visibility';


const useStyles = makeStyles(theme => ({
  button: {
    transition: theme.transitions.create(
      ['transform'],
      { duration: theme.transitions.duration.short }
    ),
    textTransform: 'uppercase',
    fontWeight: 600,
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  icon: {
    marginLeft: theme.spacing(1),
    '&.file': {
      color: theme.palette.error.main
    }
  }
}))
  
const ContentTable = ({ rows, title, intl: { formatMessage } }: Props) => {
  const classes = useStyles()

  return (
    <div>
      <TH4Sans>{title}</TH4Sans>
      <TableContainer component={Paper} elevation={0} variant="outlined">
        <Table>
          <TableBody>
            {rows.map(({ label, link, file }, index) => (
              <TableRow key={index}>
                <TableCell>{label}</TableCell>

                <TableCell align="right">
                  {link && (
                    <ButtonBase component={Link} to={link} className={classes.button}>
                      {formatMessage({ id: "GENERAL__view" })} {" "}
                      <VisibilityIcon className={`${classes.icon} link`} />
                    </ButtonBase>
                  )}

                  {file && (
                    <ButtonBase href={file} target="_blank" className={classes.button}>
                      {formatMessage({ id: "GENERAL__download" })} {" "}
                      <PictureAsPdfIcon className={`${classes.icon} file`} />
                    </ButtonBase>
                  )}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

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



