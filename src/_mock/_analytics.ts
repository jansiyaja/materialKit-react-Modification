
export interface AnalyticsDataItem {
  title: string;
  percent: number;
  total: number;
  icon: string;

  color?: "primary" | "secondary" | "warning" | "error" | "info" | "success";
  chart: {
    categories: string[];
    series: number[];
  };
}; 

export interface CurrentVisits{
    title: string;
     chart: {
       
             series: { label: string; value: number }[]; 
            
    
        },
}


  const analyticsData: AnalyticsDataItem[] = [
  {
    title: "Weekly sales",
    percent: 2.6,
    total: 714000,
    icon: "/assets/icons/glass/ic-glass-bag.svg",
    color: "primary",
    chart: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      series: [22, 8, 35, 50, 82, 84, 77, 12],
    },
  },
  {
    title: "New users",
    percent: -0.1,
    total: 1352831,
    icon: "/assets/icons/glass/ic-glass-users.svg",
    color: "secondary",
    chart: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      series: [56, 47, 40, 62, 73, 30, 23, 54],
    },
  },
  {
    title: "Purchase orders",
    percent: 2.8,
    total: 1723315,
    icon: "/assets/icons/glass/ic-glass-buy.svg",
    color: "warning",
    chart: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      series: [40, 70, 50, 28, 70, 75, 7, 64],
    },
  },
  {
    title: "Messages",
    percent: 3.6,
    total: 234,
    icon: "/assets/icons/glass/ic-glass-message.svg",
    color: "error",
    chart: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      series: [56, 30, 23, 54, 47, 40, 62, 73],
    },
  },
];


const currentVisits: CurrentVisits[] = [
  {
    title: 'Current visits',
    chart: {
      series: [
        { label: 'America', value: 3500 },
        { label: 'Asia', value: 2500 },
        { label: 'Europe', value: 1500 },
        { label: 'Africa', value: 500 },
      ],
    },
  },
];
    


export const fetchAnalyticsData = (): Promise<AnalyticsDataItem[]> => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(analyticsData);
    }, 100);
  });

export const fetchCurrentVisitsData = (): Promise<CurrentVisits[]> => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentVisits);
    }, 100);
  });