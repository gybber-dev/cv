import React from 'react'
import classNames from 'classnames'

type SkillBlockProps = {
  baseSkills: Array<{ name: string; totalProgress: number; jobsProgress: number[] }>
  otherSkills: Array<string>
  activeJobIndex?: number
}

const SkillsBlock = ({ activeJobIndex, baseSkills, otherSkills }: SkillBlockProps) => {
  const t = (phrase) => phrase
  return (
    <div>
      {baseSkills && (
        <>
          <h4 className="my-2 mt-4 pt-2 font-semibold text-simple">{t('Frontend')}</h4>
          <div>
            {baseSkills.map((skill, index) => (
              <SkillProgressItem
                key={index}
                activeJob={activeJobIndex}
                skillTitle={skill.name}
                totalProgress={skill.totalProgress}
                jobsProgress={skill.jobsProgress}
              />
            ))}
          </div>
        </>
      )}
      {otherSkills && (
        <>
          <h4 className="my-2 mt-4 pt-2 font-semibold text-simple">{t('Others')}</h4>
          <div className="flex flex-wrap">
            {otherSkills.map((skill) => (
              <div key={skill} className="mb-1 mr-1 rounded bg-shade px-2 last:ml-0 ">
                {skill}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

type Props = {
  skillTitle: string
  totalProgress: number // percentage of total progress
  jobsProgress: Array<number> // number of jobs: [1, 5, 3] - progress of skill in 3 jobs
  activeJob?: number // index of jobsProgress
}

const SkillProgressItem = ({
  skillTitle,
  totalProgress,
  jobsProgress,
  activeJob,
}: Props): React.ReactNode => {
  const totalParts = jobsProgress.reduce((prev, acc) => acc + prev, 0)
  return (
    <div>
      <div className="mb-2 text-sm">
        <p>{skillTitle}</p>
        <div className="relative h-2 w-full rounded bg-shade">
          <div
            className="absolute left-0 top-0 flex h-full overflow-hidden rounded bg-primary py-[1px]"
            style={{ width: `${totalProgress}%` }}
          >
            {jobsProgress.map((value, index) => (
              <div
                key={index}
                className="h-full"
                style={{ width: `${(value / totalParts) * 100 || 0}%` }}
              >
                <div
                  className={classNames(
                    'h-full transition-[width] duration-500 ease-in-out ',
                    activeJob === index ? 'w-full' : 'w-0',
                    activeJob === index &&
                      'bg-[repeating-linear-gradient(-45deg,transparent_0_3px,#FCD34DCC_3px_6px)]',
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsBlock
