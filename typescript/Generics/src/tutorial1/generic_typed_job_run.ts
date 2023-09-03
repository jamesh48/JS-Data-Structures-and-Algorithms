type JobG = {
  name: string;
  start: () => void;
  state: 'incomplete' | 'success' | 'failure';
};

type JobRunG<J extends JobG> = {
  job: J;
  state: 'queued' | 'running' | 'completed';
  onComplete: (cb: (job: J) => void) => void;
};

type SendEmailJobG = JobG & {
  receipientEmail: string;
  subject: string;
};

function enqueueJobG<T extends JobG>(job: T): JobRunG<T> {
  job.start();
  return {
    job,
    state: 'queued',
    onComplete: (cb: (job: T) => void) => cb(job),
  };
}

const jG: SendEmailJobG = {
  receipientEmail: 'jane@doe.com',
  subject: 'hi there',
  name: 'send-email',
  start: () => null,
  state: 'incomplete',
};

const runG = enqueueJobG(jG);

runG.onComplete((job) => {
  job;
  // ^? (parameter) job: any
});
