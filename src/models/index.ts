export interface ResumeModel {
    name: string;
    skills: Array<string>,
    education: Array<EducationInfoModel>,
    workHistory: Array<WorkHistoryModel>,
    contactDetails: ContactInfoModel;
}

export interface WorkHistoryModel {
    org: string;
    roles: Array<string>,
    period: PeriodModel,
    desc: string;
    isCurrentJob?: boolean;
    isDescShown: boolean;
}

export interface ContactInfoModel {
    mobile: string;
    email: string;
}

export interface EducationInfoModel {
    degree: string,
    college: string,
    period: PeriodModel
}

export interface PeriodModel {
    startTime: Date;
    endTime?: Date;
}