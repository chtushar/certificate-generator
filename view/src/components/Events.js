import React, {Fragment, Component} from 'react';
import {Box ,AppBar, Container,Typography, Toolbar} from '@material-ui/core'
import axios from 'axios'

class Events extends Component {
    constructor(props){
        
        super(props);
        let {email} = props;
        this.state = {
            email,
            events: []
        }
    }


    componentDidMount(){
        let emailQuery=encodeURIComponent(this.state.email)
        axios.get(`https://us-central1-certificate-generator-69a8b.cloudfunctions.net/api/findone?email=${emailQuery}`)
            .then((data) => {
                this.setState({events: data.data.events})

            })
            .catch((err) => console.log(err))
    }

    render() { 
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
                                <div style={styles.eventsList}>
                                    {this.state.events.map(e => {
                                        return(<li key={e}>{e}</li>)
                                    })}
                                </div>
                            </Container>
            
                            </Box>
                </Fragment>
                
         );
    }
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
    eventsList: {
        minHeight: '50%',
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