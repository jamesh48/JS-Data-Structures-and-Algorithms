type JobRunW = {
  job: any;
  state: 'queued' | 'running' | 'completed';
  onComplete: (cb: (job: any) => void) => void;
};

type SendEmailJobW = {
  receipientEmail: string;
  subject: string;
};

function enqueueJobW(job: any): JobRunW {
  // queue logic here
  return {
    job,
    state: 'queued',
    onComplete: (cb: (job: any) => void) => cb(job),
  };
}

const jW: SendEmailJobW = {
  receipientEmail: 'jane@doe.com',
  subject: 'hi there',
};

const runW = enqueueJobW(jW);

runW.onComplete((job) => {
  job;
  // ^? (parameter) job: any
});
