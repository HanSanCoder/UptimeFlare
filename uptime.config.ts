const pageConfig = {
  title: "HanSan's Status Page",
  links: [
    { link: 'https://github.com/HanSanCoder', label: 'GitHub' },
    { link: 'https://www.gintama.love', label: 'Blog' },
    { link: 'mailto:hehansan@gintama.love', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'homepage_monitor',
      name: 'My HomePage',
      method: 'GET',
      target: 'https://www.gintama.love'
    },
    {
      id: 'blog_monitor',
      name: 'My Blog',
      method: 'GET',
      target: 'https://my.gintama.love'
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
