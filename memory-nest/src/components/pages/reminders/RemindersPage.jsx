import { Link } from "react-router";
import Tile from "../../common/Tile";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import Reminder from "./reminder";

const RemindersPage = ({ isLoading, reminders }) => {
    let [showAddEditReminder, setShowAddEditReminder] = useState(false);
    let [remindersList, setRemindersList] = useState(reminders);
    const initialReminderData = {
        id: null,
        name : null,
        date: null,
        time: null,
        recurring: false,
        notes: null
    };
    let [form, setForm] = useState(initialReminderData);
    let [reminder, setReminder] = useState(initialReminderData);

    const handleChange = (event) =>{
        const element = event.target;
        const elementName = element.name;
        const elementValue = element.value;
        let copyForm = {...form};
        copyForm[elementName] = elementValue;
        setForm(copyForm);
    };

    const handleSave = (event) => {
        event.preventDefault();
        if(reminder.name) { // means reminder is not having initial values null
            let localRemindersList = [...remindersList];
            let reminderToUpdate = localRemindersList.find(r => r.id == reminder.id);
            reminderToUpdate.name = form.name;
            reminderToUpdate.date = form.date;
            reminderToUpdate.time = form.time;
            reminderToUpdate.recurring = form.recurring;
            reminderToUpdate.notes = form.notes;
            setRemindersList(localRemindersList);
        } else {
            const id = Date.now();
            const newReminder = new Reminder(id, form.name, form.date, form.time, form.recurring, form.notes);
            setRemindersList([...remindersList, newReminder]); 
        }
        setForm(initialReminderData);
        setShowAddEditReminder(false);
    };

    const showEdit = (reminderId) => {
        const reminder = remindersList.find(reminder => reminder.id == reminderId);
        setShowAddEditReminder(true);
        setReminder(reminder);
        setForm({...reminder});
    }

    const toggleReminder = () => {
        setShowAddEditReminder(!showAddEditReminder);
        if(!showAddEditReminder) {
            setReminder(initialReminderData);
        }
    }

    const getDateForInput = (date) => {
        return date ? date.replaceAll("/", "-") : null;
    }

    return (
        <main>
            <div className="main-page-header">

                <div className="sub-nav">
                    <Link to="/home" className="link">Home</Link>
                </div>

                <h3>Reminders</h3>
            </div>
            <div className="add-link">
                <a className="link" onClick={toggleReminder} ><span>+</span>Add reminder</a>
            </div>

            <div id="main-content-reminders">
                {
                    isLoading &&
                    (<LoadingPage dataName="reminders" />)
                }
                {
                    !isLoading && remindersList && remindersList.length == 0 &&
                    (<p><em>No reminders are set</em></p>)
                }
                {
                    !isLoading && remindersList && remindersList.length > 0 && (

                        remindersList.map((reminder) => (
                            <Link className="link" key={reminder.id} onClick={() => showEdit(reminder.id)}>
                                <Tile>
                                    <h3>{reminder.name}</h3>
                                    <p>{reminder.time ? `${reminder.date} ${reminder.time}` : reminder.date}</p>
                                    <p>{reminder.notes}</p>
                                </Tile>
                            </Link>
                        ))
                    )
                }

            </div>

            {
                (showAddEditReminder) &&
                (<div className="mask-layer">
                    <div className="popup-container">
                        <h4>{reminder.name ? "Edit" : "Add"} Reminder</h4>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name || ""} />
                        <input type="date" name="date" placeholder="Date" onChange={handleChange} value={getDateForInput(form.date || "")} />
                        <input type="time" name="time" placeholder="Time" onChange={handleChange} value={form.time || ""} />
                        <textarea name="notes" rows={5} placeholder="Notes" onChange={handleChange} value={form.notes || ""} ></textarea>
                        <button type="submit" onClick={handleSave}>Save</button>
                        <button onClick={toggleReminder}>Cancel</button>
                    </div>
                </div>)

            }

        </main>
    )
};

export default RemindersPage;
