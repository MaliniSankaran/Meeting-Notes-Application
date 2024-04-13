import MeetingNote from './../models/meeting-note.js';

/**
 * Return all meeting notes
 * @param {*} params 
 * @returns 
 */
export const getAll = async(params)=>{
    const meetingnotes= await MeetingNote.find(params).exec();
    return meetingnotes;
    

}

/**
 * Filter meeting notes based on keywords and/or date
 * @param {*} params 
 * @returns 
 */
export const filterNotes = async(params)=>{
    // const meetingnotes= await MeetingNote.find(params).exec();
    // return meetingnotes;
    let query = {};

    if (params.keywords) {
        query.$or = [
            { title: { $regex: params.keywords, $options: 'i' } },
            { content: { $regex: params.keywords, $options: 'i' } },
            { 'actionItems.text': { $regex: params.keywords, $options: 'i' } }
        ];
    }

    if (params.startDate && params.endDate) {
        query.created = { $gte: new Date(params.startDate), $lte: new Date(params.endDate) };
    }

    return await MeetingNote.find(query).exec();

}

/**
 * Saves a new meeting note
 * @param {*} meetingnote 
 * @returns 
 */
export const save = async(meetingnote)=>{
    const meetingNote= new MeetingNote(meetingnote);
    return meetingNote.save();
}

/**
 * Retrives a single meeting note object
 * 
 * @param {string} id 
 * @returns 
 */
export const get = async(id) => {
    
    const note = await MeetingNote.findById(id).exec();
    if (!note) {
        throw new Error('MeetingNote not found');
    }
    return note;
}

/**
 * Deletes a single meeting note object using id
 * @param {string} id 
 * @returns 
 */

export const remove = async(id) => {
    const result = await MeetingNote.findByIdAndDelete(id).exec();
    if (!result) {
        throw new Error('MeetingNote not found');
    }
    return result;
};

/**
 * Updates a single meeting note object using id
 * @param {string} id 
 * @returns 
 */
export const update = async(id, updateData) => {

     //const currentDate = new Date().toISOString();
     const currentDate = new Date();

     // Adjust for your time zone, for example, if you're 5 hours ahead of UTC
     currentDate.setHours(currentDate.getHours() - 4);
    
    const updatedNote = await MeetingNote.findByIdAndUpdate(
    id, 
    { ...updateData, updated: currentDate }, // Set the 'updated' field to current date and time
    { new: true }
    ).exec();

    if (!updatedNote) {
        throw new Error('MeetingNote not found');
    }
    return updatedNote;
}