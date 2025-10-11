export type Review = {
  name: string;
  title: string;
  review: string;
  date: string;
  linkedin?: string;
};

export const reviews: Review[] = [
  {
    name: "David Bowen",
    title: "Web Developer",
    review: `
      I have worked side by side with Mike on a few projects now. It’s always such a fun and creative process working with him. Not only does he play well with others, but his performance and turnaround times for project completion are unmatched! Mike has hand-crafted some beautiful and unique designs with expert functionality.

      I’m looking forward to working with him again in the very near future. Thanks, Mike!
    `,
    date: "April 2025",
    linkedin: "https://www.linkedin.com/in/david-bowen-733703253/",
  },
  {
    name: "Charles Buckley",
    title: "Lead Developer",
    review: `
      I had the opportunity to work closely with Mike while leading a recent web project. He played a key role in helping build out the site and consistently delivered quality work. He was dependable, quick to pick up new tasks, and asked the right questions to keep things moving smoothly. His attention to detail and willingness to iterate on feedback made him a valuable part of the team.
    `,
    date: "June 2025",
    linkedin: "https://www.linkedin.com/in/charles-buckley-20447950/",
  },
  {
    name: "Hunter Ammons",
    title: "Owner, Howard Motor Company",
    review: `
      FIVE stars working with Mike!

      Working with Mike Innella on my website was an absolute pleasure from start to finish. He brought a perfect balance of creativity, technical skill, and     professionalism to the project. Mike took the time to truly understand my vision and transformed it into a clean, modern, and highly functional website that exceeded my expectations.

      Communication throughout the process was smooth and responsive—he kept me updated every step of the way and was always open to feedback or new ideas. What really stood out was his eye for detail and design; every element on the site feels intentional and polished.

      Mike delivered the project on time, and I’ve already received countless compliments on how great the site looks and works. Whether you're starting from scratch or looking to revamp an existing site, I wholeheartedly recommend Mike Innella. He’s the kind of developer who not only gets the job done but elevates it to a whole new level.

      Thank you, Mike!
    `,
    date: "October 2025",
    linkedin: "N/A",
  },
];
