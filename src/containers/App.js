import React, { useState } from 'react';
import styles from '../styles/App.module.css';
import WeekCalendar from '../components/WeekCalendar';

function App() {

  return (
    <div className={styles.container}>
      <WeekCalendar />
    </div>
  );
}

export default App;
