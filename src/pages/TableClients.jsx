import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState, useMemo } from 'react';

function createData(id, name, surname, email, address, phone) {
  return {
    id,
    name: `${name} ${surname}`,
    email,
    address,
    phone,
  };
}

const rows = [
  createData(1, 'nombre1', 'apellido1-1 apellido2-1', 'email1@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(2, 'nombre2', 'apellido1-2 apellido2-2', 'email2@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(3, 'nombre3', 'apellido1-3 apellido2-3', 'email3@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(4, 'nombre4', 'apellido1-4 apellido2-4', 'email4@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(5, 'nombre5', 'apellido1-5 apellido2-5', 'email5@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(6, 'nombre6', 'apellido1-6 apellido2-6', 'email6@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(7, 'nombre7', 'apellido1-7 apellido2-7', 'email7@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(8, 'nombre8', 'apellido1-8 apellido2-8', 'email8@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(9, 'nombre9', 'apellido1-9 apellido2-9', 'email9@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(10, 'nombre10', 'apellido1-10 apellido2-10', 'email10@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(11, 'nombre11', 'apellido1-11 apellido2-11', 'email11@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(12, 'nombre12', 'apellido1-12 apellido2-12', 'email12@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
  createData(13, 'nombre13', 'apellido1-13 apellido2-13', 'email13@mail.com', 'calle de Peralta, 1251. Ciudad A. País 1', '+7 911 196 04 78'),
];

function ascendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'asc'
    ? (a, b) => ascendingComparator(a, b, orderBy)
    : (a, b) => -ascendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    aling: 'left',
    disablePadding: true,
    label: 'NOMBRE',
  },
  {
    id: 'email',
    aling: 'center',
    disablePadding: false,
    label: 'EMAIL',
  },
  {
    id: 'address',
    aling: 'center',
    disablePadding: false,
    label: 'DIRECCIÓN',
  },
  {
    id: 'phone',
    aling: 'center',
    disablePadding: false,
    label: 'TELÉFONO',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="success"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.aling}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'desc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontFamily: 'Tenor Sans',
                color: '#7C7C7C',
                fontWeight: 500,
                fontSize: '0.9rem',
                letterSpacing: '0.04rem',
                textTransform: 'uppercase'
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ display: 'none' }}>
                  {order === 'asc' ? 'sorted ascending' : 'sorted descending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.success.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} {numSelected === 1 ? 'seleccionado' : 'seleccionados'}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Clientes
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export const TableClients = () => {
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isdesc = orderBy === property && order === 'desc';
    setOrder(isdesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="success"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      {row.address}
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      {row.phone}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}