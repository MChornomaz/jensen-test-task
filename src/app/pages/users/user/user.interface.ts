export interface IUser {
  id: number;
  userName: string;
  userAvatar: string;
  phone: string;
  email: string;
  department: string;
  role: 'student' | 'caretaker' | 'teacher' | 'admin';
  level: 'preschool' | 'high_school' | 'gymnasium';
  direction: 'language' | 'math' | 'science';
}
