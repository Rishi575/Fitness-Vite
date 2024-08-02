import { CoolMode } from '@/components/magicui/cool-mode';
import { Calendar } from '@/components/ui/calendar';
import {React,useState}from 'react';
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const UserSession = ({ selectedDate, onDateSelect,completedDates = [], className, classNames, showOutsideDays = true, ...props }) => {
    const [date, setDate] = useState(new Date());

    const today = new Date();
    const disabledDays = { after: today };
   
    const isCompleted = (date) => {
        return completedDates.some(completedDate => 
          completedDate.getDate() === date.getDate() &&
          completedDate.getMonth() === date.getMonth() &&
          completedDate.getFullYear() === date.getFullYear()
        );
      };

  return (
    <div className='flex justify-center items-center bg-transparent h-5/6 w-11/12 absolute bottom-0 overflow-y-auto'>
      <div className='flex justify-center items-center absolute left-20 shade'>
      
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          disabled={disabledDays}
          className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(buttonVariants({ variant: "outline" }),"h-7 w-7 bg-transperent p-0 opacity-50 hover:opacity-100"),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }),"bg-transperent h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:"text-primary-foreground hover:bg-white hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "text-accent-foreground bg-primary",
        day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "day-disabled bg-gray-300",
        day_completed: "day_completed bg-primary",
        day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",

        ...classNames,
      }}
        
        />
        
      </div>
    </div>
  );
};
// Calendar.displayName = "Calendar";
export default UserSession;
