import { ButtonHTMLAttributes } from "react";
import plusIcon from "../assets/plus.svg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CreateEventButton({ className, ...rest }: ButtonProps) {
	return (
		<button
			className={`px-4 py-2 flex items-center justify-start rounded-full font-sans shadow-md border transition-shadow hover:shadow-xl ${className}`}
			{...rest}>
			<img src={plusIcon} alt="create_icon" className="mr-3" />
			<p className="mr-3 text-sm text-gray-600 font-medium text-center">
				Create
			</p>
		</button>
	);
}
