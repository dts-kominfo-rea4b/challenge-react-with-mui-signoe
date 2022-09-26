// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <Card>
            <List sx={{ width: '100%', bgcolor: '#E1ECF9' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar
                            alt={data.name} 
                            src={data.photo}
                            sx={{ width: 50, height: 50, marginRight: 2}}
                            >
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary={data.name}
                        secondary={
                            <React.Fragment>
                                <Typography variant="body2">
                                    {data.phone}
                                </Typography>
                                <Typography variant="body2">
                                    {data.email}
                                </Typography>
                            </React.Fragment>
                        }
                        />
                </ListItem>
                <Divider variant="middle" component="li" />
            </List>
        </Card>
    );
};

export default Contact;
