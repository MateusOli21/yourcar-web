import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { MdLocationOn } from 'react-icons/md';
import { BiCalendar, BiChevronDown } from 'react-icons/bi';

import { ScheduleDropdownWrapper } from '@components/elements/wrappers';
import { PrimaryButton } from '@components/elements/buttons';

const ScheduleTestDrive: React.FC = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [toggleLocations, setToggleLocations] = useState(false);

  const locations = [
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
  ];

  const handleToggleCalendar = () => setToggleCalendar(!toggleCalendar);

  const handleToggleLocations = () => setToggleLocations(!toggleLocations);

  return (
    <div className="w-full max-w-3xl flex flex-col gap-11 md:flex-row items-center justify-between mt-24 mb-11 px-7 py-6 bg-gray-100 shadow-xl">
      <ScheduleDropdownWrapper
        onClick={handleToggleLocations}
        onKeyPress={handleToggleLocations}
        role="button"
        tabIndex={0}
      >
        <MdLocationOn size={20} className="text-red-500" />
        <p>escolha o local</p>
        <BiChevronDown size={20} />
        {toggleLocations && (
          <ul className="w-52 z-10 absolute top-8 left-0 flex flex-col gap-3 bg-gray-100 border border-gray-300 shadow-lg p-6">
            {locations.map((location, index) => (
              <li key={index} className="text-sm">
                {location}
              </li>
            ))}
          </ul>
        )}
      </ScheduleDropdownWrapper>

      <ScheduleDropdownWrapper
        onClick={handleToggleCalendar}
        onKeyPress={handleToggleCalendar}
        role="button"
        tabIndex={0}
      >
        <BiCalendar size={20} className="text-red-500" />
        <p>escolha a data</p>
        <BiChevronDown size={20} />

        {toggleCalendar && (
          <Calendar
            className="w-80 z-10 absolute top-12 -left-1/3 sm:-left-1/4 md:left-0 bg-gray-100 border border-gray-300 shadow-lg p-6"
            value={calendarValue}
            onChange={setCalendarValue}
          />
        )}
      </ScheduleDropdownWrapper>
      <PrimaryButton>Marcar teste</PrimaryButton>
    </div>
  );
};

export default ScheduleTestDrive;
