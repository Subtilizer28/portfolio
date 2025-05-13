// src/components/Icon.jsx
import React from 'react';
import { HomeRounded, PersonRounded, WorkRounded, ContactMailRounded, SchoolRounded, LightbulbRounded } from '@mui/icons-material';

export default function Icon({ icon, className }) {
  const icons = {
    home: <HomeRounded className={className} />,
    about: <PersonRounded className={className} />,
    projects: <WorkRounded className={className} />,
    contact: <ContactMailRounded className={className} />,
    education: <SchoolRounded className={className} />,
    skills: <LightbulbRounded className={className} />,
  };

  return <div className="icon-container">{icons[icon]}</div>;
}
