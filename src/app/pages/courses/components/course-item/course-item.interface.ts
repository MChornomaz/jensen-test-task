export interface ICourseItem {
  id: number;
  name: string;
  description: string;
  grades: ICourseGrade[];
}

export interface ICourseGrade {
  id: number;
  name: string;
  description: string;
}
