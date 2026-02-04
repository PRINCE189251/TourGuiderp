
export enum AppTab {
  HOME = 'home',
  PLANNER = 'planner',
  EXPLORER = 'explorer',
  LIVE_GUIDE = 'live_guide'
}

export interface ItineraryDay {
  day: number;
  activities: {
    time: string;
    description: string;
    location: string;
  }[];
}

export interface ItineraryResponse {
  destination: string;
  summary: string;
  days: ItineraryDay[];
}

export interface GroundingSource {
  title: string;
  uri: string;
}
