export interface CoursesResponse {
    id: number,
    name: string,
    created_at: Date,
    teachers: string[],
    status: string,
    average: number,
    students_with_garde: number,
    all_students: number,
    inactive_students: number, // inactive students last 7 days
    featurse: string[],
    scores: number[],
    coursesNumber: number,
}
