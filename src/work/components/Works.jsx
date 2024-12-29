import React from "react";
import Button from "../../navigation/component/Button";
import todoProjectImage from "../assets/todoList.png";
import spaceProjectImage from "../assets/spaceTourism.png";
import bookmarkProjectImage from "../assets/bookmark.png";
import focusProjectImage from "../assets/focustoday.png";
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
                btnText="View All Projects"
                btnDivClass="my-5"
              />
            </a>
          </div>
        </div>
        <section className="my-20 flex flex-wrap items-start justify-center gap-x-10 gap-y-5 lg:justify-between">
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
          <Card
            projectImage={focusProjectImage}
            projectAlt="focus on today project image"
            projectName="Focus On Today"
            projectLink="https://vishnufd.github.io/focus-on-today/"
            projectDetails="The 'Focus On Today' is a web application designed to help users set and track daily goals, promoting productivity and personal growth. The application displays the number of goals completed, motivating users to achieve all their daily objectives.  Inspirational quotes, such as “Move one step ahead, today!”, are displayed to keep users motivated."
            technologies="HTML, CSS, JavaScript, Git"
          />
        </section>
      </section>
    </section>
  );
};

export default Works;
