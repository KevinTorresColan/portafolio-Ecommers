import React, { useEffect, useState } from 'react';
import './tableComponent.scss';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from "@mui/material";
import { formatDate } from '../../../../Util';

const headTable = [
  { name: "#", align: "center" },
  { name: "Marca", align: "left" },
  { name: "Nombre", align: "left" },
  { name: "date", align: "left" },
  { name: "Cantidad", align: "left" },
  { name: "Precio", align: "left" },
  { name: "Total", align: "left" }
]

interface Props {
  filteredItems: any;
}

const TableComponent = ({ filteredItems }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState<any[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setItemsPerPage(filteredItems?.slice(startIndex, endIndex));
  }, [filteredItems, page, rowsPerPage]);
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              {headTable?.map(({ name, align }: any) => (
                <TableCell
                  align={align}
                  key={name}
                  className={"c_table__header-table-cell"}
                >
                  <Typography variant="h5" sx={{ padding: "15px" }}>
                    {name}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsPerPage?.length > 0 ? (
              itemsPerPage?.map((row: any, i: number) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" className="body-table-cell">
                    <Typography variant="h5">{i + 1}</Typography>
                  </TableCell>
                  <TableCell align="left" className="body-table-cell">
                    <Typography variant="h5">{row.brand}</Typography>
                  </TableCell>
                  <TableCell align="left" className="body-table-cell">
                    <Typography variant="h5">{row.name}</Typography>
                  </TableCell>
                  <TableCell align="left" className="body-table-cell">
                    <Typography variant="h5">{formatDate(row.date)}</Typography>
                  </TableCell>
                  <TableCell align="left" className="body-table-cell">
                    <Typography variant="h5">{row.quantity}</Typography>
                  </TableCell>
                  <TableCell align="left" className="body-table-cell">
                    <Typography variant="h5">{`S/ ${row.price}`}</Typography>
                  </TableCell>
                  <TableCell align="left" className="body-table-cell">
                    <Typography variant="h5">{`S/ ${row.quantity * row.price}`}</Typography>
                  </TableCell>
                </TableRow>
              ))
              ) : (
                <TableRow>
                  <TableCell colSpan={headTable?.length + 1} align="center">
                    <Typography variant="h5">No hay registros</Typography>
                  </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filteredItems?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Registros por página"
        labelDisplayedRows={(page: any) =>
          `${page.from}-${page.to === -1 ? page.count : page.to} de ${
            page.count
          }`
        }
      />
    </>
  )
}

export default TableComponent;