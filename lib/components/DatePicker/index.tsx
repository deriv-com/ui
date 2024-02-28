import moment from "moment";
import { ComponentProps, useEffect, useRef, useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useOnClickOutside } from "usehooks-ts";
import { Input } from "../Input";
import "./DatePicker.scss";
import { CalendarIcon } from "./CalendarIcon";

type DatePickerProps = ComponentProps<typeof Input> & {
    errorMessage?: string;
    isInvalid?: boolean;
    maxDate?: Date;
    minDate?: Date;
    mobileAlignment?: "above" | "below";
    onDateChange: (formattedDate: string | null) => void;
    value: string;
};

function unixToDateString(date: Date) {
    return moment(date).format("YYYY-MM-DD");
}

function customFormatShortWeekday(_locale: string | undefined, date: Date) {
    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
    return weekdays[date.getDay()];
}

/**
 * This component let's you pick a date and store it in the input field.
 * @param {DatePickerProps.label} label - The Input label.
 * @param {DatePickerProps.isInvalid} isInvalid - Set whether the input is invalid.
 * @param {DatePickerProps.errorMessage} errorMessage - The error message to be displayed.
 * @param {DatePickerProps.value} value - The default value of the input.
 * @param {DatePickerProps.onDateChange} onDateChange - Callback to be called when the date is changed.
 * @param {DatePickerProps.maxDate} maxDate - Set the maximum date that can be picked.
 * @param {DatePickerProps.minDate} minDate - Set the minimum date that can be picked.
 */
export const DatePicker = ({
    disabled,
    errorMessage,
    isFullWidth = false,
    isInvalid,
    label,
    maxDate,
    minDate,
    mobileAlignment = "below",
    onBlur,
    onChange,
    onDateChange,
    ...props
}: DatePickerProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        props.value ? new Date(props.value ?? "") : null,
    );
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
    const datePickerRef = useRef<HTMLDivElement>(null);

    const toggleCalendar = () => {
        setIsCalendarOpen((prevState) => !prevState);
    };

    useOnClickOutside(datePickerRef, () => {
        setIsCalendarOpen(false);
    });

    const handleDateChange: CalendarProps["onChange"] = (value) => {
        const calendarSelectedDate = Array.isArray(value) ? value[0] : value;
        setSelectedDate(new Date(calendarSelectedDate?.toString() ?? ""));
        setIsCalendarOpen(false);
    };

    useEffect(() => {
        if (selectedDate !== null) {
            onDateChange(unixToDateString(selectedDate));
        }
    }, [selectedDate]);

    return (
        <div className="deriv-datepicker" ref={datePickerRef}>
            <Input
                {...props}
                error={isInvalid}
                isFullWidth={isFullWidth}
                aria-label={label}
                label={label}
                message={isInvalid ? errorMessage : ""}
                onBlur={onBlur}
                onChange={onChange}
                onClick={toggleCalendar}
                rightPlaceholder={
                    <button
                        className="deriv-datepicker__button"
                        data-testid="dt_datepicker_button"
                        disabled={disabled}
                        onClick={toggleCalendar}
                        type="button"
                    >
                        <CalendarIcon />
                    </button>
                }
                value={selectedDate ? unixToDateString(selectedDate) : ""}
                wrapperClassName="w-full"
            />
            {isCalendarOpen && (
                <div
                    className={`deriv-datepicker__container deriv-datepicker__container--${mobileAlignment}`}
                    data-testid="dt_datepicker_container"
                >
                    <Calendar
                        formatShortWeekday={customFormatShortWeekday}
                        maxDate={maxDate}
                        minDate={minDate}
                        onChange={handleDateChange}
                        value={selectedDate ?? ""}
                    />
                </div>
            )}
        </div>
    );
};
