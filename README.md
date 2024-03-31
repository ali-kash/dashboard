# Admin Dashboard

[View Live](https://dashboard-sandy-gamma-59.vercel.app/)

Created this project using some basic technology to showcase an admin dashboard. For the sake of time there is no user validation, but just a presentation of using modern day technologies to display multiple types of data.

- Dark/Light Mode ✔✔
- Material UI for the production of prebuilt components, but any framework such as Bootstrap or TailwindElements could be used in it's place.
- **This is in no means any where near close to a production ready site. I put this together within threed days just to learn more about the visualization of different types of data.**
- With more time this could have been fully responsive, with user authentication, some framer motion functionality, and much more.

Links in the sidebar navigation go to pages with specific content.

The content may include data tables, form, calendar, and various types of charts to showcase data.

### Contacts -

A data table that utilizes multiple built in data filters.

### Profile Form -

- The form has validation using regex for some input fields.
- When submitting a valid form, the data will be displayed in the console.
- [Formik](https://www.npmjs.com/package/formik)
- [Yup](https://www.npmjs.com/package/yup) (validation)

### Calendar -

- Existing events can be pulled in to display in the Calendar.
- Click on a date to add an event, click on the event to delete it.
- Events can be drag/drop to new date.
- Switch to Week view and move the event to a new time and drag it to increase/decrease event duration.
- This could be expanded upon in many ways to create a more detailed calendar utility.
- [FullCalendar React Component](https://www.npmjs.com/package/@fullcalendar/react)

### Charts

- Using [Nivo.Rocks](https://nivo.rocks/) for the chart design and functionality.
- Data being used is provided via Nivo.Rocks for the sake of learning.
