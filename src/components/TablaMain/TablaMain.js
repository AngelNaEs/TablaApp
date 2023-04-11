import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Photos } from "../../api";
import { Box, Skeleton, Typography } from "@mui/material";

const photosController = new Photos();

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "albumId", headerName: "ID Álbum", width: 100 },
  { field: "title", headerName: "Título", width: 350 },
  {
    field: "image",
    headerName: "Imagen",
    width: 180,
    renderCell: (params) => <img src={params.value} style={{ width: 180 }} />,
  },
];

export const TablaMain = () => {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await photosController.getPhotos(
          "https://jsonplaceholder.typicode.com/photos"
        );

        const datos = response.map((dato) => ({
          id: dato.id,
          albumId: dato.albumId,
          title: dato.title,
          image: dato.url,
        }));

        setRows(datos);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (rows === null)
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ margin: "auto" }}>
            <Skeleton sx={{ margin: "auto", width: "200px" }} />
          </Typography>
        </div>

        <Box sx={{ width: "100%", marginTop: "50px" }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </>
    );

  return (
    <div
      style={{
        height: 400,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ margin: "auto" }}>
          Tabla de Datos
        </Typography>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};
