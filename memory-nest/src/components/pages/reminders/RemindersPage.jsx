import { Link } from "react-router";
import Tile from "../../common/Tile";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import Reminder from "./reminder";
import Button from "../../common/Button";
import { FaTrash } from "react-icons/fa";


const RemindersPage = ({ isLoading, reminders }) => {
    let [showAddEditReminder, setShowAddEditReminder] = useState(false);
    let [remindersList, setRemindersList] = useState(reminders);
    const initialReminderData = {
        id: null,
        name: null,
        date: null,
        time: null,
        recurring: false,
        notes: null
    };
    let [form, setForm] = useState(initialReminderData);
    let [reminder, setReminder] = useState(initialReminderData);

    const handleChange = (event) => {
        const element = event.target;
        const elementName = element.name;
        const elementValue = element.value;
        let copyForm = { ...form };
        copyForm[elementName] = elementValue;
        setForm(copyForm);
    };

    const handleSave = (event) => {
        event.preventDefault();
        if (reminder.name) { // means reminder is not having initial values null
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
        setForm({ ...reminder });
    }

    const toggleReminder = () => {
        setShowAddEditReminder(!showAddEditReminder);
        if (!showAddEditReminder) {
            setReminder(initialReminderData);
        }
    }

    const getDateForInput = (date) => {
        return date ? date.replaceAll("/", "-") : null;
    }

    const handleDelete = (event, reminderId) => {
        event.preventDefault();
        event.stopPropagation();
        const remindersAfterDelete = [...remindersList].filter(r => r.id != reminderId);
        setRemindersList(remindersAfterDelete);
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
                                    <div className="reminder-content">
                                        <h3>{reminder.name}</h3>
                                        <p>{reminder.time ? `${reminder.date} ${reminder.time}` : reminder.date}</p>
                                        <p>{reminder.notes}</p>
                                    </div>
                                    <div className="reminder-action">
                                        <button name="delete" className="reminder-delete-icon" onClick={(event) => handleDelete(event, reminder.id)}><FaTrash/>
                                        </button>
                                    </div>
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
                        <Button type="submit" onClick={handleSave} label={"Save"}></Button>
                        <Button onClick={toggleReminder} label={"Cancel"}></Button>
                    </div>
                </div>)

            }

        </main>
    )
};

export default RemindersPage;
