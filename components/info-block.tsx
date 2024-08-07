import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

const InfoBlock = ({ title, children }: Props) => (
  <section className="w-full text-simple">
    <h3 className="mb-4 w-full border-b-2 border-b-primary pb-2 text-2xl uppercase text-primary">
      {title}
    </h3>
    {children}
  </section>
)

export default InfoBlock
