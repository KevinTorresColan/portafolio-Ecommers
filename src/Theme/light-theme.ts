import { createTheme } from "@mui/material";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#144a7d",
    },
    secondary: {
      main: "#78a240",
    },
    info: {
      main: "#ffffff",
      dark: "#144a7d",
    },
    error: {
      main: "#EC6666",
    },
    warning: {
      main: "#FFB118",
    },
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#144a7d",
          whiteSpace: "nowrap",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Catamaran, sans-serif",
        },
      },
      variants: [
        {
          props: { variant: "h5" },
          style: {
            padding: "10px 15px",
            fontWeight: 400,
            fontSize: 13.5,
            lineHeight: "22.5px",
            "@media (min-width:900px)": {
              fontSize: 14,
            },
          },
        }
      ],
    },
  },
});
