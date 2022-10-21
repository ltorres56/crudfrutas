import { Delete, Edit } from "@mui/icons-material";
import { Button, createTheme } from "@mui/material";
import { esES } from "@mui/x-data-grid";


export const theme = createTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    esES,
);

const renderImagen = ({ row }) => {
    const { imagen, name } = row;
    return (
        <div className="text-center">
            <img src={imagen} alt={name} className="rounded-circle m-2" height={150} width={150} />
        </div>
    )
};

const renderEditButtons = ({ row }) => {
    const { updateDoc, id } = row;

    return (
        <Button variant="contained" startIcon={<Edit />} color="warning" onClick={() => { updateDoc(id) }}>
            Editar
        </Button>
    )
};
const renderDeleteButtons = ({ row }) => {
    const { DeleteDoc, id } = row;

    return (
        <Button variant="contained" startIcon={<Delete />} color="error" onClick={() => { DeleteDoc(id) }}>
            Eliminar
        </Button>
    )
};

export const columnsGridPinture = [
    {
        field: 'imagen',
        headerName: '',
        minWidth: 170,
        renderCell: renderImagen,
        align: "center",
    },
    {
        field: 'name',
        headerName: 'Nombre',
        minWidth: 180,
        headerAlign : 'center',
    },
    {
        field: 'city',
        headerName: 'Ciudad',
        minWidth: 150,
        align: "center",
        headerAlign : 'center',
    },
    {
        field: 'captureDate',
        headerName: 'Fecha de Captura',
        minWidth: 150,
        align: "center",
        headerAlign : 'center',
    },
    {
        field: 'author',
        headerName: 'Autor',
        minWidth: 150,
        headerAlign : 'center',
    },
    {
        field: 'phone',
        headerName: 'Teléfono',
        minWidth: 100,
        headerAlign : 'center',
    },
    {
        field: 'price',
        headerName: 'Valor',
        minWidth: 100,
        headerAlign : 'center',
    },
    {
        field: 'description',
        headerName: 'Descripción',
        minWidth: 412,
    },
    {
        field: 'updateDoc',
        headerName: '',
        minWidth: 150,
        renderCell: renderEditButtons,
        align: "center",
    },
    {
        field: 'DeleteDoc',
        headerName: '',
        minWidth: 150,
        renderCell: renderDeleteButtons,
        align: "center",
    },
];