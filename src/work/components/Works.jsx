import React from "react";
import Button from "../../navigation/component/Button";
import todoProjectImage from "../assets/todoList.png";
import spaceProjectImage from "../assets/spaceTourism.png";
import bookmarkProjectImage from "../assets/bookmark.png";
import weatherAppImage from "../assets/weatherApp.png";
import Card from "./Card";

const Works = () => {
  return (
    <section id="work" className="flow-root w-full bg-[#313131] text-white">
      <section className="my-24 max-w-full px-5 md:px-16 lg:px-28">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="max-w-[455px] flex-col">
            <div className="flex items-center gap-x-3">
              <div className="h-[2px] w-[50px] bg-[#079211]"></div>
              <h4 className="font-bold text-[#079211]">Recent Work</h4>
            </div>
            <h2 className="my-3 text-2xl font-bold md:text-4xl">
              Some of my favorite projects.
            </h2>
          </div>
          <div>
            <a
              target="_blank"
              href="https://github.com/vishnufd?tab=repositories"
            >
              <Button
                btnClass="bg-transparent py-2 px-3 md:text-[14px] text-[12px] font-bold sm:px-5 sm:py-2 border-2 border-[#079211] hover:bg-transparent"
                btnText="View My Works"
                btnDivClass="my-5"
              />
            </a>
          </div>
        </div>
        <section className="my-20 flex flex-wrap items-start justify-center gap-x-10 gap-y-10 lg:justify-between">
          <Card
            projectImage={todoProjectImage}
            projectAlt="todo list project image"
            projectName="Todo List"
            projectLink="https://vishnufd.github.io/my-todo-list/"
            projectDetails="This project is a web-based application designed to help users manage
          their tasks efficiently. It allows users to add and delete tasks,
          providing a straightforward interface for daily task management."
            technologies="React, Tailwind, Git"
          />
          <Card
            projectImage={weatherAppImage}
            projectAlt="weather app project image"
            projectName="Weather App"
            projectLink="https://vishnufd.github.io/weather-app/"
            projectDetails="The Weather App is a responsive and modern web application built using React and styled with Tailwind CSS. It allows users to search for any city and view real-time weather information by fetching data from the OpenWeatherMap API. The app displays key weather details such as temperature, conditions, humidity, and wind speed. It features dynamic weather icons based on current conditions, along with proper error handling for invalid or empty inputs. The project uses Git for version control and is designed with a clean UI that works smoothly across all devices."
            technologies="React, Tailwind, CSS, Git"
          />
          <Card
            projectImage={spaceProjectImage}
            projectAlt="space tourism project image"
            projectName="Space Tourism"
            projectLink="https://vishnufd.github.io/my-space-tourism/"
            projectDetails="This project is a web application that provides information about space tourism, including destinations, travel options, and booking details. It offers an interactive user interface to explore various aspects of space travel."
            technologies="React, React Router, Tailwind, Git"
          />
          <Card
            projectImage={bookmarkProjectImage}
            projectAlt="bookmark project image"
            projectName="Bookmark Web App"
            projectLink="https://vishnufd.github.io/bookmark-landing-page/"
            projectDetails="The 'Bookmark Landing Page' is a responsive website designed to promote a fictional bookmark manager application. It showcases the app's features, provides download links for browser extensions, and includes a FAQ section to address common inquiries."
            technologies="HTML, Tailwind, JavaScript, Git"
          />
        </section>
      </section>
    </section>
  );
};

export default Works;
