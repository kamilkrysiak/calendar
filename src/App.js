import React, { Component } from 'react';
import CardList from './components/CardList'
import './App.css';

class App extends Component { 
  constructor() { 
    super();
    this.state = { 
      holidays: [], 
      textAreaInfo: '',
      isEdited: false
     }
  }
  handleEditChange = (id) => { 
    if (!this.state.isEdited) {
    let holidays = this.state.holidays;
    let textAreaInfo;
    holidays.forEach(holiday => { 
      if (holiday.id === id) { 
         holiday.edited = !holiday.edited;
         textAreaInfo = holiday.info
      }
      else return holiday
    })
    this.setState({
      holidays,
      textAreaInfo,
      isEdited: true
     })
    } else (
      alert("zapisz zmiany, zanim przejdziesz do nowego pola")
    )
  }

  handleSaveEdit = (id) => { 
      let holidays = this.state.holidays;
      holidays.forEach(holiday => { 
        if (holiday.id === id) { 
          holiday.edited = !holiday.edited
          holiday.info = this.state.textAreaInfo
        }
        else return holiday
      })
      this.setState({
        holidays,
        textAreaInfo: '',
        isEdited: false
       })
    } 
   

  handleTextAreaInfo = (e) => { 
    this.setState({
      textAreaInfo: e.target.value
    })
  }

  handleDeleteHoliday = (id) => { 
    this.setState(prevState => ({
      holidays: prevState.holidays.filter(holiday => holiday.id !== id),
      isEdited: false
    }))
  }

  setHolidays () { 
    const API = `https://holidayapi.com/v1/holidays?key=17c7eb4a-c30e-4068-af85-70bd69b05620&country=PL&year=2019`;
    fetch(API)
    .then(response => {
      if (response.ok) {
       return response.json() 
      } 
      throw Error(response.statusText);
    })
    .then(data => { 
    const holidays = data.holidays;
      const newHolidays = holidays.map(holiday => ({
      id: holiday.uuid, 
      name: holiday.name, 
      date: holiday.date, 
      weekDay: holiday.weekday.date.name,
      info: 'Opis święta...', 
      edited: false, 
    }))
    this.setState({
      holidays: newHolidays
    })
    })
    .catch(error => console.log(error));
    }

    componentDidMount() {
      this.setHolidays();
    }

  render() { 
    return ( 
      <div className="app">
      <h1>Holidays in Poland</h1>
      <CardList 
      holidays={this.state.holidays} 
      textAreaInfo={this.state.textAreaInfo}
      handleEditChange={this.handleEditChange}
      handleTextAreaInfo={this.handleTextAreaInfo}
      handleSaveEdit={this.handleSaveEdit}
      editing={this.state.editing}
      handleDeleteHoliday={this.handleDeleteHoliday}
      />
      </div>
     )
  }
}
export default App;
