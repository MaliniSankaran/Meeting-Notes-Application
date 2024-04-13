import MeetingNotesRouter from './meeting-notes-route.js';

const initializeRoutes=(app)=>{
    app.use('/meetingnotes',MeetingNotesRouter);
}

export default initializeRoutes;