import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'

const Calendar = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [currentEvents, setCurrentEvents] = useState([])

	const handleDateClick = (selected) => {
		// ↓↓ usually done with a modal - for times sake ↓↓
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect() // ability to unselect date

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			})
		}
	}

	// ↓↓ triggered when clicking on an event ↓↓
	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove()
		}
	}

	return (
		<Box p='20px'>
			<Header title='Calendar' subtitle='Full Calendar Interactive Page' />

			<Box display='flex' justifyContent='space-between'>
				{/* Calendar Sidebar */}
				<Box
					flex='1 1 20%'
					backgroundColor={colors.primary[400]}
					p='15px'
					borderRadius='4px'
				>
					<Typography variant='h5'>Events</Typography>
					<List>
						{currentEvents.map((event) => (
							<ListItem
								key={event.id}
								sx={{
									backgroundColor: colors.greenAccent[500],
									margin: '10px 0',
									borderRadius: '2px',
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* Calendar */}
				<Box flex='1 1 100%' ml='15px'>
					<FullCalendar
						height='75vh'
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: 'prev,next today', // ← no spaces
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth', // ← no spaces
						}}
						initialView='dayGridMonth'
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvents(events)}
						initialEvents={[
							{
								id: '13001',
								title: 'First Day of Spring',
								date: '2024-03-19',
							},
							{
								id: '13002',
								title: 'Nature Day',
								date: '2024-04-02',
							},
							{
								id: '13003',
								title: 'National Pet Day',
								date: '2024-04-11',
							},
							{
								id: '13004',
								title: 'International Astronomy Day',
								date: '2024-04-29',
							},
							{
								id: '13005',
								title: 'Brown Bag It Thursday',
								date: '2024-05-19',
							},
						]}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Calendar
