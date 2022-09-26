// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import React, { useState } from 'react';

const ContactForm = ({ handlerOnSubmit }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name:'',
        phone:'',
        email:'',
        photo:''
    });

    const updateContact = e => {
        setNewContact({
          ...newContact,
          [e.target.id]: e.target.value
        });
    };
    
    return (
        <Card>
            <CardContent sx={{ bgcolor:'background.paper'}}>
                <form 
                    style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                    onSubmit={(event) => {
                        event.preventDefault();
                        handlerOnSubmit(newContact);
                        setNewContact({
                        name: '',
                        phone: '',
                        email: '',
                        photo: '',
                        });
                    }}
                    >
                    <TextField
                        fullWidth
                        required
                        id="name"
                        label="Name" 
                        variant="outlined"
                        value={newContact.name} onChange={updateContact} 
                        />
                    <TextField
                        fullWidth
                        required
                        id="phone"
                        label="Phone" 
                        variant="outlined"
                        value={newContact.phone} onChange={updateContact}
                        />
                    <TextField
                        fullWidth
                        required
                        id="email"
                        label="Email" 
                        variant="outlined"
                        value={newContact.email} onChange={updateContact} 
                        />
                    <TextField
                        fullWidth
                        required
                        id="photo"
                        label="Photo URL" 
                        variant="outlined"
                        value={newContact.photo} onChange={updateContact} 
                        />
                    <CardActions>
                        <Button 
                            type="submit"
                            variant="contained"
                            >
                            Add New
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    );
}

export default ContactForm;