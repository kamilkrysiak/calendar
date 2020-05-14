import React from 'react'; 
import Card from './Card';
import './CardList.css';

const CardList = (props) => { 
const holidays = props.holidays.map(holiday => <Card 
key={holiday.id}
id={holiday.id}
name={holiday.name}
date={holiday.date}
weekDay={holiday.weekDay}
info={holiday.info}
edited={holiday.edited}
isEditButton={props.isEditButton}
handleEditChange={props.handleEditChange}
handleTextAreaInfo={props.handleTextAreaInfo}
handleSaveEdit={props.handleSaveEdit}
textAreaInfo={props.textAreaInfo}
handleDeleteHoliday={props.handleDeleteHoliday}
/>
)
    return ( 
        <div className="CardList">
            {holidays}
         </div>
      )
}

export default CardList;