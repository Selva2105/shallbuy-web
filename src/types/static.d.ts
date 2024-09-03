export interface Job {
  id: string;
  jobGroup: string;
  jobHeading: string;
  description: string;
  requiredQualifications: string[];
  keyResponsibilities: string[];
  location: string;
  jobType: string;
  experienceLevel: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export interface homeReviews {
  userProfile?: string;
  userAltText: string;
  userName: string;
  rating: number;
  reviewMsg: string;
}
