import { bodypartImg, equipImg, gymImg, targetImg } from "../assets"

export const NavLinks = [{
    id:'home',
    title: 'Home',
    to:'',
},{
    id:'contactForm',
    title:'Contact US',
    to:'contact_Form',
},{
    id:'Exercise',
    title:'Exercises',
    to:'exercises',
},]

export const ExerciseCategory = [{
    id:'all',
    icon:gymImg,
    title:'All',
},{
    id:'bodypart',
    icon:bodypartImg,
    title:'Body Part',
},{
    id:'Equipment',
    icon:equipImg,
    title:'Equipment'
},{
    id:'targetList',
    icon:targetImg,
    title:'Target List'
}]