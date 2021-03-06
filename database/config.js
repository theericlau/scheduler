const Sequelize = require('sequelize');

// underscored = (snake_case foreign keys)
module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    name: { type: Sequelize.STRING, unique: true },
    role: Sequelize.STRING,
    password: Sequelize.STRING,
  }, { underscored: true, timestamps: false });

  const Schedule = sequelize.define('schedule', {
    monday_dates: { type: Sequelize.DATEONLY, unique: true },
  }, { underscored: true, timestamps: false });

  const Employee_Availability = sequelize.define('employee_availability', {
    is_available: Sequelize.BOOLEAN,
  }, { underscored: true, timestamps: false });

  const Actual_Schedule = sequelize.define('actual_schedule', {
  }, { underscored: true, timestamps: false });

  const Needed_Employee = sequelize.define('needed_employee', {
    employees_needed: Sequelize.INTEGER,
  }, { underscored: true, timestamps: false });

  const Day_Part = sequelize.define('day_part', {
    name: { type: Sequelize.STRING, unique: true },
  }, { underscored: true, timestamps: false });

  const Session = sequelize.define('session', {
    session: { type: Sequelize.STRING, unique: true },
  }, { underscored: true, timestamps: false });

  const Business = sequelize.define('business', {
    name: { type: Sequelize.STRING, unique: true },
  }, { underscored: true, timestamps: false });

  const Shift_Trade_Request = sequelize.define('shift_trade_request', 
    {
      status: { type: Sequelize.STRING, unique: false },
    }, { underscored: true, timestamps: false });

  const db = {
    User,
    Schedule,
    Employee_Availability,
    Actual_Schedule,
    Needed_Employee,
    Day_Part,
    Session,
    Business,
    Shift_Trade_Request,
  };

  return db;
};
