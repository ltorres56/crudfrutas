import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton } from '@mui/x-data-grid';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { columnsGridPinture, theme } from '../structure/data';
import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../structure/firebase';
import Swal from 'sweetalert2'
import "../index.css"

const Home = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        obtenerDatos()
    }, []);

    const obtenerDatos = async () => {
        try {
            setLoading(true);
            await onSnapshot(collection(db, 'pictureSale'), (query) => {
                setRows(query.docs.map((doc) => ({ ...doc.data(), id: doc.id, updateDoc, DeleteDoc })));
                setTimeout(() => setLoading(false), 1000);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const updateDoc = (id) => {
        history('/edit/' + id)
    }

    const DeleteDoc = (id) => {
        Swal.fire({
            title: 'EstaSeguro que desea eliminar la imagen en venta?',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            showCancelButton: true,
            cancelButtonColor: 'rgb(95 96 96)',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
            icon: 'warning',
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    setLoading(true);
                    deleteDoc(doc(db, 'pictureSale', id)).then(() => {
                        setLoading(false);
                        Swal.fire({
                            title: 'Eliminado.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                        })
                    });
                } catch (error) {
                    console.error(error);
                }

            }
        })
    }

    const EditToolbar = (props) => {
        const { history } = props;
        const ref = useRef();
        useEffect(() => {
            ref.current.innerHTML = "<span class=\"MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon\"><svg class=\"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root\" focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"AddIcon\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></svg></span>Registrar<span class=\"MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root\"></span>"
        }, [ref])
        return (
            <GridToolbarContainer className='border-bottom'>
                <GridToolbarColumnsButton className='m-2' variant="contained" />
                <GridToolbarColumnsButton color="primary" startIcon={<AddIcon />} onClick={() => { history("/create") }} variant="contained" className='m-2' ref={referent => ref.current = referent} />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 800, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <ThemeProvider theme={theme}>
                        <DataGrid
                            rows={rows}
                            columns={columnsGridPinture}
                            getRowHeight={() => 'auto'}
                            loading={loading}
                            components={{
                                Toolbar: EditToolbar,
                            }}
                            componentsProps={{
                                toolbar: { history },
                            }}
                            disableSelectionOnClick
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default Home
