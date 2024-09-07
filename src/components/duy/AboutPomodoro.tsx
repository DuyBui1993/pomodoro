import * as React from 'react';
import { TitleWithUnderline } from '@/components/duy/TitleWithUnderline';

const Link = ({ href, children }) => {
  return (
    <a className="text-orange-600 underline" href={href}>
      {children}
    </a>
  );
};

export const AboutPomodoro = () => {
  return (
    <div>
      <h2 className="mb-12 text-4xl">An online Pomodoro Timer to boost your productivity</h2>
      <div className="space-y-10">
        <TitleWithUnderline text="What is Pomofocus?" />
        <p>
          Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim
          of this app is to help you focus on any task you are working on, such as study, writing,
          or coding. This app is inspired by Pomodoro Technique which is a time management method
          developed by Francesco Cirillo.
        </p>

        <TitleWithUnderline
          text="What is Pomodoro Technique?
"
        />
        <p>
          The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work
          and study. The technique uses a timer to break down work into intervals, traditionally 25
          minutes in length, separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as
          a university student. - <Link href="#">Wikipedia</Link>
        </p>

        <TitleWithUnderline text="How to use the Pomodoro Timer?" />
        <ol className="list-decimal space-y-3 pl-8">
          <li>
            <b>Add tasks</b> to work on today
          </li>
          <li>
            <b>Set estimate pomodoros</b> (1 = 25min of work) for each tasks
          </li>
          <li>
            <b>Select a task</b> to work on
          </li>
          <li>
            <b>Start timer</b> and focus on the task for 25 minutes
          </li>
          <li>
            <b>Take a break</b> for 5 minutes when the alarm ring
          </li>
          <li>
            <b>Iterate 3-5</b> until you finish the tasks
          </li>
        </ol>

        <TitleWithUnderline text="Basic Features" />
        <ul className="list-disc space-y-3 pl-8">
          <li>
            <b>Estimate Finish Time:</b> Get an estimate of the time required to complete your daily
            tasks.
          </li>
          <li>
            <b>Add Templates:</b> Save your repetitive tasks as templates and add them with just one
            click.
          </li>
          <li>
            <b>Visual Reports:</b> See how much time you've focused each day, week, and month.
          </li>
          <li>
            <b>Custom Settings:</b> Personalize your focus/break time, alarm sounds, background
            sounds, and more.
          </li>
        </ul>

        <TitleWithUnderline text="Premium Features" />
        <ul className="list-disc space-y-3 pl-8">
          <li>
            <b>Add Projects:</b> Track how much time you spend on each project.
          </li>
          <li>
            <b>Yearly Reports:</b> View your focus hours for each year.
          </li>
          <li>
            <b>Download Reports:</b> Download your focus history in CSV format.
          </li>
          <li>
            <b>No Template Limit:</b> Save more than 3 templates.
          </li>
          <li>
            <b>Todoist Integration:</b> Load tasks from your Todoist account.
          </li>
          <li>
            <b>Webhook Integration:</b> Connect to other apps (Zapier, IFTTT, etc). No Ads: Enjoy a
            clean and distraction-free app experience.
          </li>
        </ul>
        <TitleWithUnderline text="Download App" />
        <ul className="list-disc space-y-3 pl-8">
          <li>
            <Link href="#">For macOS</Link> (zip file) *Right click the icon to open
          </li>
        </ul>
      </div>
    </div>
  );
};
