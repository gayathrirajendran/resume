export interface ResumeModel {
    name: string;
    summary: string;
    socialMedia: SocialMediaModel[]
    occupation: string;
    skills: Array<string>,
    education: Array<EducationInfoModel>,
    workHistory: Array<WorkHistoryModel>,
    contactDetails: ContactInfoModel;
}

export interface SocialMediaModel {
    link: string;
    network: 'linkedIn' | 'instagram' | 'twitter';
    title: string;
}

export interface WorkHistoryModel {
    org: string;
    roles: Array<string>,
    period: PeriodModel,
    desc: string;
    isCurrentJob?: boolean;
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