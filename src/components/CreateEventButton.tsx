import { ButtonHTMLAttributes } from "react";
import plusIcon from "../assets/plus.svg";

type DivAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

interface CreateEventButtonProps extends DivAttributes {
	hiddenLabel?: boolean;
}

export function CreateEventButton({
	hiddenLabel,
	className,
	...rest
}: CreateEventButtonProps) {
	return (
		<button
			className={`${
				hiddenLabel ? "px-2 aspect-square" : "px-4 py-2"
			} flex items-center justify-start max-h-16 rounded-full font-sans shadow-md border transition-shadow hover:shadow-xl bg-white ${className}`}
			{...rest}>
			<img
				src={plusIcon}
				alt="create_icon"
				className={`size-8 ${hiddenLabel ? "min-w-8 mr-0" : "mr-3"}`}
			/>
			<p
				hidden={hiddenLabel}
				className="mr-3 text-sm text-gray-600 font-medium text-center">
				Create
			</p>
		</button>
	);
}
