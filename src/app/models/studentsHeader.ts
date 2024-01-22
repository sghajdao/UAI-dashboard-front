export interface StudentsHeader {
    enrolled_students: number,
    score_under_sixty:number, // number of students with current score under sixty
    average_grade: number, // average cuerrent score for enrolled students
    no_activity_students: number, // number of students with no activity last 30 days
    average_days: number, // average days since last attended
}
