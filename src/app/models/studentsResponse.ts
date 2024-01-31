export interface StudentsResponse {
    user_id: number,
    user_sis_id: number,
    name: string,
    courses_enrolled: number,
    courses_with_grade: number
    average_grade: number,
    on_time_submissions: number,
    missing_submissions: number,
    late_submissions: number,
    execused_submissions: number,
    since_last_attended: number,
    since_last_activity: number,
    courses_score: number[]
}
