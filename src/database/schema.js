import { primaryKey, string, foreignKey, array} from 'drizzle-orm';

export const Grades = {
  id: primaryKey(),
  grade: string().notNull()
};

export const Classes = {
  id: primaryKey(),
  gradeID: foreignKey(Grades.id).notNull(),
  class: string().notNull()
};

export const Students = {
  id: primaryKey(),
  classID: foreignKey(Classes.id).notNull(),
  firstName: string().notNull(),
  lastName: string().notNull(),
  fatherName: string().notNull(),
  motherName: string().notNull(),
  notes: array(string()).notNull(),
  grades: array(integer()).notNull(),
  password: string().notNull()
};
