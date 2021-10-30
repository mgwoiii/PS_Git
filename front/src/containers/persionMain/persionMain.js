import { Component } from "react";
import PersionContent  from '../../component/Persion/PersionContent';
import CalenderApp from "./Template/Calender/CalenderApp";
import moment from "moment";
import { withRouter } from 'react-router-dom';
import Week from "./Template/Calender/Week";

class PersionMain extends Component{

    constructor(props){
        super(props);

        let dateNumber = moment();
        let year2 = dateNumber.format("YYYY");
        let month2 = (dateNumber.format("MM")); 
        let day2 = dateNumber.format("DD");
    
        this.state = {
            calenderYM : moment(),
            selected : moment().format("YYYY-MM-DD"),
            startDate : new Date(year2,month2 -1 ,day2),
            chkDate : ''
        }
    }


    moveMonth = (month) => {
        this.setState({
            calenderYM : this.state.calenderYM.add(month,'M')
        })
    }   
    
    moveDay = (day) => {
        this.setState({
            calenderYM : moment(day,'YYYY MM DD')
        })
    }
  
    static defaultProps = {
        clickFn : () => {}
    }

    changeSelected = (clickedDate, value) => {

        if(value === "header"){
            if(moment(clickedDate).isSame(this.state.selected,'day')){
                this.props.clickFn(clickedDate);
                return;
            }

            this.setState({
                selected : clickedDate,
            }, () => {
                // setState 이후 실행됨
            // setState 한 후 처리할 비지니스 로직 혹은 메서드 호출하면 동기식으로 처리 가능
            })

            this.props.clickFn(clickedDate)

            if(moment(clickedDate).isBefore(this.state.calenderYM,'month')){
                this.moveMonth(-1)
            }else if(moment(clickedDate).isAfter(this.state.calenderYM,'month')){
                this.moveMonth(1)
            }

            // label 업데이트 
            let aa = clickedDate.split('-');

            // 0(year) , 1(month), 2(day)
            this.setStartDate(aa[0], aa[1], aa[2]);

        }else{
           this.props.history.push({
                pathname: '/persion-main/Persion/PersionMainDayDetail',
                clickedDate : clickedDate,
                
            });
        }

    }


    CalSelect =(i) => {

            const firstDayOfMonth = moment(this.state.calenderYM).startOf('month');
            const firstDateOfMonth = firstDayOfMonth.get('d');
            const firstDayOfWeek = firstDayOfMonth.clone().add(-firstDateOfMonth,'d');
            
        let chkinsert = {
            chkDateStart : firstDayOfWeek.clone().add( i*7 , 'day').format("YYYY-MM-DD"),
            chkDateEnd : firstDayOfWeek.clone().add( i*7 + 6 , 'day').format("YYYY-MM-DD")
        }
       return chkinsert;
    }




    Weeks = (monthYear, selected, clickFn) => {

     

        const firstDayOfMonth = moment(monthYear).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');
        const firstDayOfWeek = firstDayOfMonth.clone().add(-firstDateOfMonth,'d');
        const _Weeks = [];

        for (let i = 0; i < 6; i++) {
            const ArrData = [];

            _Weeks.push((

            <Week key={`RCA_Calender_Week_${i}`}
                
                weekIndex = {i}
                ymOfThisCalendar = {firstDayOfMonth.format("YYYY-MM")}
                firstDayOfThisWeekformat={firstDayOfWeek.clone().add(i *7, 'day').format("YYYY-MM-DD")}
                selected = {selected}
                fn = {clickFn}
                CalSelect = {this.CalSelect}
            />
            ))
        }
        return _Weeks
    }


    setStartDate = (year,month,day) => {
        this.setState({
            startDate : new Date(year,month -1 ,day),
          }, () => {
            // setState 이후 실 행됨
           // setState 한 후 처리할 비지니스 로직 혹은 메서드 호출하면 동기식으로 처리 가능
          })

    }


    render(){
        return (
            <PersionContent>
                <CalenderApp
                    moveMonth = {this.moveMonth}
                    moveDay  = {this.moveDay}
                    changeSelected  = {this.changeSelected}
                    CalSelect  = {this.CalSelect}
                    setStartDate = {this.setStartDate}
                    calenderYMHeader ={ this.state.calenderYM.format("YYYY년 MM월")}

                    YM = { this.state.calenderYM.format("YYYY-MM-DD")}
                    calenderYMD = {this.state.calenderYM}
                    startDate = {this.state.startDate}

                    selected = {this.state.selected} 

                    Weeks = {this.Weeks}
                />
            </PersionContent>
        );
    }
}

export default withRouter(PersionMain);