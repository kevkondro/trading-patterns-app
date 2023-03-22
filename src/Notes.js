import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2),
       },
    input: { // add a new class to set the width of the TextField
      width: '100%',
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

function Note({ content }) {
  return (
    <Card>
    <CardContent>
      <Typography variant="body1">{content}</Typography>
    </CardContent>
  </Card>
  );
}

function NotesList({ notes, onDeleteNote }) {
    const classes = useStyles();
  
    const handleDelete = (id) => {
      onDeleteNote(id);
    };
  
    return (
        <Grid container direction="column" justify="flex-start" alignItems="left" className={classes.root}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Grid item key={note.id}>
              <Note content={note.content} />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </Button>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No notes found.</Typography>
        )}
      </Grid>
    );
  }
  

function NoteForm({ onAddNote }) {
  

  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNote({
      id: Date.now(),
      content
    });

    setContent("");
  };
  const classes = useStyles();
  return (
   
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" justify="flex-start" alignItems="left" className={classes.root}>
      
        <Grid item xs={12}>
        <Card>
      <CardContent>
          <TextField
            label="Content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            multiline
            rows={2}
            className={classes.input}
          />
          </CardContent>
    </Card>
        </Grid>
       
        <Grid item xs={12}>
        <p></p>
          <Button type="submit" variant="contained" color="primary">
            Add Note
          </Button>
        </Grid>
      </Grid>
    </form>
    
  );
}

function Notes() {
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/641ae649ace6f33a22f354f3/latest?meta=false",
          {
            headers: {
              "X-Master-Key":
                "$2b$10$GLQsJ56hcRP/EA9t3SifHueTbr/kQAgjr/6dGuur5l1Fl5FUr8wPu",
            },
          }
        );
  
        //const data = await response.json();
        setNotes(await response.json());
      }
  
      fetchData();
    }, []);
  
    const handleAddNote = (newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
      
        const updatedNotes = [...notes, newNote];
      
        fetch("https://api.jsonbin.io/v3/b/641ae649ace6f33a22f354f3", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2b$10$GLQsJ56hcRP/EA9t3SifHueTbr/kQAgjr/6dGuur5l1Fl5FUr8wPu"
          },
          body: JSON.stringify(updatedNotes)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to update notes.");
          }
          console.log("Notes updated successfully.");
        })
        .catch(error => {
          console.error(error);
        });
      };
      
      const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
      
        fetch("https://api.jsonbin.io/v3/b/641ae649ace6f33a22f354f3", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2b$10$GLQsJ56hcRP/EA9t3SifHueTbr/kQAgjr/6dGuur5l1Fl5FUr8wPu",
          },
          body: JSON.stringify(updatedNotes),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update notes.");
            }
            console.log("Notes updated successfully.");
          })
          .catch((error) => {
            console.error(error);
          });
      };
  
    return (
      <div>
        <h3 style={{ fontFamily: "Droid Sans" }}>My Notes</h3>
        {notes.length > 0 ? (
          <div >
            <NotesList notes={notes} onDeleteNote={handleDeleteNote} />
            <NoteForm onAddNote={handleAddNote} />
          </div>
        ) : (
            <NoteForm  onAddNote={handleAddNote} />
        )}
      </div>
    );
  }
  
  export default Notes;
