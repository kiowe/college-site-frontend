export interface Group {
    id: number,
    groupName: string
}

export interface GroupResponse {
    status: number,
    request: string,
    response: Array<Group>
}

export interface Subject {
    id: number,
    subjectName: string
}

export interface SubjectResponse {
    status: number,
    request: string,
    response: Array<Subject>
}

export interface Teacher {
    id: number,
    teacherName: string
}

export interface TeacherResponse {
    status: number,
    request: string,
    response: Array<Teacher>
}

export interface Weekday {
    id: number,
    weekdayName: string
}

export interface WeekdayResponse {
    status: number,
    request: string,
    response: Array<Weekday>
}

export interface Office {
    id: number,
    officeNumber: string
}

export interface OfficeResponse {
    status: number,
    request: string,
    response: Array<Office>
}

export interface Shedule {
    id: number,
    date: string,
    group: Group,
    Weekday: Weekday,
    subject: Subject,
    office: Office,
    teacher: Teacher
}

export interface SheduleResponse {
    status: number,
    request: string,
    response: Array<Shedule>
}
