import React from 'react';
import Format from "date-fns/format";
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import { addDays, endOfWeek, isSameDay, isSameMonth, parse, startOfMonth, startOfWeek } from 'date-fns';
import { endOfMonth } from 'date-fns/esm';

class Calendar extends React.Component{

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    
    renderHeader(){

        const dateFormat = "MMMM yyyy";

        return(
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {Format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end">
                    <div className="icon" onClick={this.nextMonth}>
                        chevron_right
                    </div>
                </div>
            </div>
        );

    }
    renderDays(){
        const dateFormat = "dddd";
        const days = [];

        let startDate = startOfWeek(this.state.currentMonth);

        for (let i=0; i<7; i++){
            days.push(
                <div className="col col-center" key={i}>
                    {Format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }
    renderCells(){
        const { currentMonth, selectedDate } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate ){
            for (let i = 0; i < 7; i++) {
                formattedDate = Format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                      className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : ""}`} 
                      key = {day}
                      onClick={()=>this.onDateClick(cloneDay)}
                    >
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push (
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        alert(day)
        this.setState({
            selectedDate:day
        });
    };
    nextMonth = () => {
        this.setState({
            currentMonth:addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth:subMonths(this.state.currentMonth, 1)
        });
    };

    render(){
        return(
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;
