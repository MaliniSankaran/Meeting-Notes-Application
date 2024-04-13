import * as meetingNoteService from './../services/meeting-notes-service.js';
import {setResponse, setError} from './response-handler.js';

//To fetch all notes
export const getAll = async(request, response)=>{
    try {
        const notes = await meetingNoteService.getAll(request.query);
        setResponse(notes, response);

    } catch (error) {
        setError(error, response);
    }

}

//To filter notes based on keywords
export const filter = async(request, response)=>{
    try {
        const notes = await meetingNoteService.filterNotes(request.query);
        setResponse(notes, response);
    } catch (error) {
        setError(error, response);
    }

}

//To add new meeting note
export const add= async (request,response)=>{
    try {
        const note={...request.body};

         // Create a new Date object with current date and time
         //const currentDate = new Date().toISOString();
         const currentDate = new Date();

         // Adjust for your time zone, for example, if you're 5 hours ahead of UTC
         currentDate.setHours(currentDate.getHours() - 4);
         // Set the time part of the 'created' field
         note.created = currentDate;
         const meetingNote= await meetingNoteService.save(note);
        setResponse(meetingNote,response);
    } catch (error) {
        setError(error, response);
    }

}
//To get a note using id
export const get = async(request, response)=>{
    try {
       const note= await meetingNoteService.get(request.params.id);
       setResponse(note, response); 
    } catch (error) {
        if (error.message === 'MeetingNote not found') {
            response.status(404).send({ error: error.message });
        } else {
            setError(error, response);
        }
    }
}

//To update an existing note
export const update = async (request, response) => {
    try {
        const updatedNote = await meetingNoteService.update(request.params.id, request.body);
        setResponse(updatedNote, response);
    } catch (error) {
        if (error.message === 'MeetingNote not found') {
            response.status(404).send({ error: error.message });
        } else {
            setError(error, response);
        }
    }
}

//To delete existing note
export const remove = async (request, response) => {
    try {
        await meetingNoteService.remove(request.params.id);
        setResponse({ message: "MeetingNote deleted successfully" }, response);
    } catch (error) {
        // Check for a 'not found' error and handle it
        if (error.message === 'MeetingNote not found') {
            response.status(404).send({ error: error.message });
        } else {
            setError(error, response);
        }
    }
}

