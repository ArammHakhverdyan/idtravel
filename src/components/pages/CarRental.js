import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name,Photo,Colour, Year, Bort, Seats, Price, Book) {
  return { name,Photo,Colour, Year, Bort, Seats, Price, Book };
}
const photoUrl = "https://www.carjunction.com/car_images2/11562_23484/23484k.jpg"  
const book = <Button variant="contained" color="primary" href="#contained-buttons" onClick={() => {alert("Please contact with us")}}>
Book
</Button>
const rows = [
  createData('Nissan Tiida Latio', <img src={photoUrl} alt="Logo" style={{width: 100}}/>, "White", 2007, "Sedan", 5, 5000, book),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CarRental() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Model</StyledTableCell>
            <StyledTableCell align="right">Photo</StyledTableCell>
            <StyledTableCell align="right">Colour</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Bort</StyledTableCell>
            <StyledTableCell align="right">Seats</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;(AMD)&nbsp;(day)</StyledTableCell>
            <StyledTableCell align="right">Book</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Photo}</StyledTableCell>
              <StyledTableCell align="right">{row.Colour}</StyledTableCell>
              <StyledTableCell align="right">{row.Year}</StyledTableCell>
              <StyledTableCell align="right">{row.Bort}</StyledTableCell>
              <StyledTableCell align="right">{row.Seats}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.Book}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}