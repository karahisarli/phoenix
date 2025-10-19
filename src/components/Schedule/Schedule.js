import React from 'react';
import { Calendar, Clock, Activity, Heart, Dumbbell, Users } from 'lucide-react';
import './Schedule.css';

const Schedule = ({ t }) => {
  const weekSchedule = {
    monday: {
      de: 'Montag',
      en: 'Monday',
      classes: [
        { time: '17:30', name: 'Lauf-Training', icon: Activity, color: 'text-blue-500' }
      ]
    },
    tuesday: {
      de: 'Dienstag',
      en: 'Tuesday',
      classes: [
        { time: '17:30', name: 'Functional Fitness', icon: Dumbbell, color: 'text-orange-500' }
      ]
    },
    wednesday: {
      de: 'Mittwoch',
      en: 'Wednesday',
      classes: [
        { time: '19:15', name: 'Functional Fitness', icon: Dumbbell, color: 'text-orange-500' }
      ]
    },
    thursday: {
      de: 'Donnerstag',
      en: 'Thursday',
      classes: []
    },
    friday: {
      de: 'Freitag',
      en: 'Friday',
      classes: [
        { time: '19:00', name: 'Functional Fitness', icon: Dumbbell, color: 'text-orange-500' }
      ]
    },
    saturday: {
      de: 'Samstag',
      en: 'Saturday',
      classes: [
        { time: '11:30', name: 'Team WOD', icon: Users, color: 'text-orange-500' }
      ]
    },
    sunday: {
      de: 'Sonntag',
      en: 'Sunday',
      classes: []
    }
  };

  const currentLang = t.nav.home === 'Home' ? 'en' : 'de';

  return (
    <section id="schedule" className="schedule">
      <div className="schedule-container">
        <h2 className="schedule-title">
          <Calendar className="schedule-title-icon" />
          {t.schedule.title}
        </h2>
        
        <div className="schedule-grid">
          {Object.entries(weekSchedule).map(([day, info]) => (
            <div key={day} className={`schedule-day-card ${info.classes.length === 0 ? 'schedule-day-empty' : ''}`}>
              <h3 className="schedule-day-name">{info[currentLang]}</h3>
              <div className="schedule-classes">
                {info.classes.length > 0 ? (
                  info.classes.map((classInfo, index) => {
                    const Icon = classInfo.icon;
                    return (
                      <div key={index} className="schedule-class">
                        <Icon className={`schedule-class-type-icon ${classInfo.color}`} />
                        <div className="schedule-class-info">
                          <span className="schedule-class-time">
                            {currentLang === 'de' 
                              ? `${classInfo.time} Uhr` 
                              : (() => {
                                  const [hours, minutes] = classInfo.time.split(':');
                                  const hour = parseInt(hours);
                                  const displayHour = hour > 12 ? hour - 12 : hour;
                                  return `${displayHour}:${minutes} PM`;
                                })()
                            }
                          </span>
                          <span className="schedule-class-name">{classInfo.name}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="schedule-no-class">
                    <span>{currentLang === 'de' ? 'Kein Training' : 'No Training'}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-note">
          <p>{t.schedule.note}</p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;