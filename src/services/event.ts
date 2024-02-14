import dayjs from "dayjs";
import { api } from "./api";

// Define your API endpoints
const getEvent = (id: number) => api.get(`/events/${id}`);
const createEvent = (data: any) => api.post("/events", data);
const updateEvent = (id: number, data: any) => api.put(`/events/${id}`, data);
const deleteEvent = (id: number) => api.delete(`/events/${id}`);

export type Event = {
	id: number;
	name: string;
	date: string;
	location: string;
	description: string;
};

const getEvents = async (month: number = dayjs().month()): Promise<Event[]> => {
	try {
		const response = await api.get("/events");

		const events = response.data.filter((event: any) => {
			const eventMonth = dayjs(event.date).month();
			return (
				eventMonth === month && dayjs(event.date).year() === dayjs().year()
			);
		});

		return events;
	} catch {
		return [];
	}
};

// Export your API functions
export const eventService = {
	getEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent,
};
