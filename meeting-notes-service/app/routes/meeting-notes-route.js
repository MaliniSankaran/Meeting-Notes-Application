import express from "express";
import * as meetingNotesController from './../controllers/meeting-notes-controller.js';


const router = express.Router();

router.route('/')
      
       .get(meetingNotesController.filter)
       .post(meetingNotesController.add)
       ;
// Define the route for the /filter endpoint
router.get('/filter', meetingNotesController.filter);

router.route('/:id')
    .get(meetingNotesController.get)
    .patch(meetingNotesController.update)
    .delete(meetingNotesController.remove)
     ;
export default router;

