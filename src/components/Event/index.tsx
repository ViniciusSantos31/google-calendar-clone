type CalendarEventProps = {
	event: Event;
};

function CalendarEvent({ event }: CalendarEventProps) {
	return (
		<div className="flex items-center flex-start whitespace-nowrap overflow-hidden self-start space-x-2 w-full bg-transparent px-2 cursor-pointer rounded transition-colors hover:bg-blue-100">
			<div className="min-w-2 aspect-square rounded-full bg-blue-400" />
			<span
				id="event-title"
				className="flex space-x-2 text-ellipsis text-xs font-sans font-normal">
				<p id="event-hour" className="text-xs text-gray-500">
					11am
				</p>
				<span>Vinícius dos Santos Silveira and Thais Gaudencio</span>
			</span>
		</div>
	);
}

export default CalendarEvent;
