import Student from "modules/student/types/Student";

interface Project {
  id: string;
  name: string;
  subject: any; // Subject
  status: boolean;
  createDate: Date | string;
  exercises: any; // Exercise[]
  users: Student[];
  files: any[];
}

export default Project;
