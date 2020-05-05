import React, {Fragment} from 'react';
import {Box ,AppBar, TextField, Button, Container,Typography, Toolbar} from '@material-ui/core'

const Events = ({email}) => {
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
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
                    {email}
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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        height: '50%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    }
}

export default Events;