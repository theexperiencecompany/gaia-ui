"use client";

import {
	CalendarEventCard,
	EventTitle,
	EventTime,
	EventLocation,
} from "@/registry/new-york/ui/calendar-event-card";

export default function CalendarEventCardDefault() {
	return (
		<div className="flex flex-col gap-4 w-full max-w-md">
			<CalendarEventCard eventColor="#3b82f6">
				<EventTitle>Team Standup</EventTitle>
				<EventTime startTime="9:00 AM" endTime="9:30 AM" />
				<EventLocation>Google Meet</EventLocation>
			</CalendarEventCard>

			<CalendarEventCard eventColor="#22c55e">
				<EventTitle>Product Review</EventTitle>
				<EventTime startTime="2:00 PM" endTime="3:00 PM" />
				<EventLocation>Conference Room A</EventLocation>
			</CalendarEventCard>

			<CalendarEventCard eventColor="#ef4444">
				<EventTitle>Client Call</EventTitle>
				<EventTime startTime="4:00 PM" endTime="5:00 PM" />
				<EventLocation>Zoom</EventLocation>
			</CalendarEventCard>
		</div>
	);
}
