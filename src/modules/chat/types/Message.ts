import Student from "modules/student/types/Student";

interface Message {
  id: string;
  message: string;
  createDate: Date | string;
  author: Student;
}

export default Message;
