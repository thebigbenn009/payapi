import { goals } from "@/SocialSvgs";
import React from "react";
import ScheduleDemo from "./ScheduleDemo";

const Goals = () => {
  return (
    <section className="wrapper goals-container">
      <div className="section-goals">
        {goals.map((goal) => {
          return (
            <div className="goal" key={goal.label}>
              <div className="goal-svg"> {goal.icon}</div>
              <div className="goal-text">
                <h3>{goal.label}</h3>
                <div className="text-wrapper">
                  <p>{goal.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cta">
        <h2>Ready to start?</h2>
        <ScheduleDemo />
      </div>
    </section>
  );
};

export default Goals;
