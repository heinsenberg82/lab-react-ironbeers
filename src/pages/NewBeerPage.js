import {Alert, Breadcrumbs, Link as MuiLink, Snackbar, Stack, TextField, Typography} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import {DatePicker} from "@mui/x-date-pickers";
import {useState} from "react";
import axios from "axios";

export default function NewBeerPage() {
    const [ formData, setFormData ] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: null,
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    });
    
    const [snackbar, setSnackbar] = useState({
        show: false,
        severity: null, // "error" | "success"
        message: ""
    });
    
    const [isLoading, setIsLoading] = useState(false);
    
    const updateForm = obj => setFormData({ ...formData, ...obj });
    
    const handleFormSubmit = async e => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formData);
            
            if (response.status === 200 || response.status === 201){
                setSnackbar({
                   show: true,
                   severity: "success",
                   message: response.data.message 
                });
            }
        } catch (err) {
            let message = typeof err.response !== "undefined" ? err.response.statusText : err.message;
            setSnackbar({
                show: true,
                severity: "error",
                message: message
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCloseSnackbar = () => {
        setSnackbar({
            ...snackbar,
            show: false,
            message: ""
        });
    }
    
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ padding: "25px 0" }}>
                <MuiLink
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    component={Link} to="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </MuiLink>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    New Beer
                </Typography>
            </Breadcrumbs>
            <form style={{background: "white"}} onSubmit={handleFormSubmit}>
                <h1>Add new beer 🍺</h1>
                <Stack spacing={3}>
                    <TextField id="beer-name" label="Beer's name" variant="outlined" onChange={ e => updateForm({ name:  e.target.value}) } />
                    <TextField id="beer-tagline" label="Tagline" variant="outlined" onChange={ e => updateForm({ tagline:  e.target.value}) } />
                    <TextField id="beer-description" label="Description" variant="outlined" 
                               multiline={true} rows={3} maxRows={7} 
                               onChange={ e => updateForm({ description:  e.target.value}) }/>
                    <DatePicker
                        label="First brewed"
                        value={formData.first_brewed}
                        onChange={(newValue) => {
                            updateForm({ first_brewed: newValue.format() });
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TextField id="brewers-tips" label="Brewers tips" variant="outlined" onChange={ e => updateForm({ brewers_tips:  e.target.value}) } />
                    <TextField id="attenuation-level" label="Attenuation Level" variant="outlined" onChange={ e => updateForm({ attenuation_level:  e.target.value}) }/>
                    <TextField id="contributed-by" label="Contributed by" variant="outlined" onChange={ e => updateForm({ contributed_by:  e.target.value}) }/>
                    <LoadingButton
                        size="small"
                        type="submit"
                        loading={isLoading}
                        loadingIndicator="Adding…"
                        variant="contained"
                    >
                        Add Beer
                    </LoadingButton>
                </Stack>
            </form>
            <Snackbar open={snackbar.show} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: "bottom", horizontal: "center"}} >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    { snackbar.message }
                </Alert>
            </Snackbar>
        </>
    );
}