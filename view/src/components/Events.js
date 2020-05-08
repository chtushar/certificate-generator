import React, {Fragment, Component} from 'react';
import {Box ,AppBar, Container,Typography, Toolbar, Paper, List, ListItem} from '@material-ui/core'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import { PDFDownloadLink} from '@react-pdf/renderer'
import Certificate from './template/Certificate'












class Events extends Component {
    constructor(props){
        
        super(props);
        let {email} = props;
        this.state = {
            email,
            events: [],
            name: ''
        }
    }


    componentDidMount(){
        let emailQuery=encodeURIComponent(this.state.email)
        axios.get(`https://us-central1-certificate-generator-69a8b.cloudfunctions.net/api/findone?email=${emailQuery}`)
            .then((data) => {
                this.setState({events: data.data.events, name: `${data.data.firstName} ${data.data.lastName}`})

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
                                <Paper
                                    style={styles.card}
                                    elevation={2}
                                >
                                    <div>
                                    <Typography color="textSecondary" gutterBottom style={styles.name}>
                                        {this.state.name}
                                    </Typography>
                                    </div>
                                    <div style={styles.eventsList}>
                                        <List>
                                                {this.state.events.map(e => {

                                                    return(<ListItem button key={uuid()} style={styles.listItem}>
                                                            <PDFDownloadLink document={<Certificate />} fileName="somename.pdf">
                                                                <Typography >
                                                                    {e}
                                                                </Typography>
                                                            </PDFDownloadLink>
                                                            </ListItem>)
                                                })}
                                        </List>
                                    </div>
                                </Paper>
                            </Container>
            
                            </Box>
                </Fragment>
                
         );
    }
}
 
//example@example.com
 
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '50%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    listItem: {
        textAlign: 'center'
    },
    name: {
        padding: '16px'
    }
}

export default Events;