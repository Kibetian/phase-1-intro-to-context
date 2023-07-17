// Your code here
// createEmployeeRecord
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // createEmployeeRecords
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  // createTimeInEvent
  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    });
    return employee;
  }
  
  // createTimeOutEvent
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    });
    return employee;
  }
  
  // hoursWorkedOnDate
  function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  // wagesEarnedOnDate
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    const payRate = employee.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
  }
  
  // allWagesFor
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => {
      return total + wagesEarnedOnDate(employee, date);
    }, 0);
    return totalWages;
  }
  
  // calculatePayroll
  function calculatePayroll(employees) {
    const totalPayroll = employees.reduce((total, employee) => {
      return total + allWagesFor(employee);
    }, 0);
    return totalPayroll;
  }
  
