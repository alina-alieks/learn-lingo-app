import { useParams } from "react-router-dom";
import teachers from "../../teachers.json";
import css from "./TeacherDetails.module.css";

export default function TeacherDetails() {
  const teacherID = useParams();
  const teacher = teachers.find((item) => item.id === teacherID);
  // console.log(teacher);

  return <div>{teacher ? <p>{teacher.experience}</p> : <p>No details</p>}</div>;
}
