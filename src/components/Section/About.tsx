import TextReveal from "../Reveal/Text"
import { ContactInfo } from '@/components/Dock/ContactInfo'
import BoxReveal from "../ui/box-reveal"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="grid grid-cols-2 px-80">
          <div className="flex items-center">
            <div>
              <div className="pb-5">
                <TextReveal
                  text="Hello 👋, I' m CHAIRAT"
                  textClass="font-bold text-4xl"
                />
              </div> 
              <TextReveal
                text="I am a fifth-year student about to graduate soon from Rajamangala University of Technology Lanna. I have a strong interest in and enjoy software development. I am a quick learner, dedicated to developing my skills."
              />
            </div>
          </div>
          <div className="flex justify-center">
            <BoxReveal
              boxColor="#5046e6"
              duration={0.5}
            >
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  width={300}
                  height={300}
                  alt="profile"
                />
              </div>
            </BoxReveal>
          </div>
        </div>
        <div className="flex justify-center">
          <BoxReveal
            boxColor="#5046e6"
            duration={0.5}
          >
            <ContactInfo />
          </BoxReveal>
        </div>
      </div>
    </div>
  )
}

export default About