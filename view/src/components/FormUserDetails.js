import React, {Fragment} from 'react';
import {Box ,AppBar, TextField, Button, Container,Typography, Toolbar, Paper} from '@material-ui/core'






const FormUserDetails = ({nextStep, handleChange, email}) => {
    

    const next =e => {
        e.preventDefault();
        nextStep();
    }
    
    return ( 
        
            <Fragment>
                <AppBar style={styles.appbar}>
                    <Toolbar>
                        <Typography variant="h6">
                            GDG Nagpur | Certificate Portal
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box>

                
                <Container maxWidth="sm" style={styles.container}>
                    <Paper
                        style={styles.card}
                        elevation={2}
                    >
                        <form onSubmit={next} style={styles.form}>
                        <TextField
                            label="Email"
                            placeholder="Enter your email.."
                            onChange={handleChange}
                            defaultValue={email}
                            />
                            <br/>
                            <Button
                            style={styles.button}
                            onClick={next}
                            >
                                Get Certificate
                            </Button>
                        </form>
                    </Paper>
                </Container>

                </Box>
            </Fragment>
            
     );
}
 

const styles = {
    appbar: {
        backgroundColor: "#ffffff",
        color: "#000000"
    },
    button: {
        margin: 15,
        backgroundColor: "#3f51b5",
        color: "#fff"
    },
    container: {
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: '50%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

}


export default FormUserDetails;