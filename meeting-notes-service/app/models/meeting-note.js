import mongoose from "mongoose";

const actionItemSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const meetingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    actionItems: [actionItemSchema],
    created: {
        type: Date,
        required: true,
        default: Date.now // Set default as current date
    },
    updated: {
        type: Date
    }
});

const Meeting = mongoose.model('MeetingNote', meetingSchema);

export default Meeting;
