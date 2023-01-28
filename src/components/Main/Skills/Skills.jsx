import React from "react";
import SkillBar from 'react-skillbars';

const Skills = () => {
  const skills = [
    { type: 'Javascript', level: 80,  color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'C#', level: 55 , color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'HTML', level: 80, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'PHP', level: 65, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'CSS', level: 75, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'MongoDB', level: 80, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'SQL', level: 70, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'Laravel', level: 65, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'React', level: 75, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'Node', level: 75, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'Angular', level: 50, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
    { type: 'Git', level: 90, color: {
      bar: '#4288d0',
      title: { text: '#fff', background: '#124e8c' }
    } },
   
  ];
  const colors = {
    // bar: 'red',
    title: {
      text: '#01A9DB',
      background: '#01A9DB',
    },
  };
  return <><h2 className="skillsTitle">Skills</h2>
    <section id="skills"><SkillBar barBackground = {'transparent'} height={'2vh'} colors={colors} skills={skills}/></section>
  </>
};

export default Skills;
