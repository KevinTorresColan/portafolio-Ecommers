/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Grid,
  Paper
} from "@mui/material";
import { InputComponent } from '../../../../Components';

interface Props {
  itemsBuy: any;
  data: any;
  handleSearch: (item: any, data: any) => void;
  handleInputChange: (e: any) => void;
}

const FilterComponent = ({ itemsBuy, data, handleSearch, handleInputChange }: Props) => {

  useEffect(() => {
    handleSearch(itemsBuy, data);
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Historial de Compras</h2>
        </Grid>
      </Grid>
      <Paper sx={{ p: 2, mb: 5 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <InputComponent
                label="Fecha inicio consulta"
                name="startDate"
                type="date"
                value={data.startDate}
                InputProps={{ inputProps: { max: data.endDate } }}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <InputComponent
                label="Fecha fin de consulta"
                name="endDate"
                type="date"
                value={data.endDate}
                InputProps={{ inputProps: { min: data.startDate } }}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleSearch(itemsBuy, data)}
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  )
}

export default FilterComponent;