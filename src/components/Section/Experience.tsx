import React from "react"
import Image from "next/image"

const Experience = () => {
  return (
    <div className="bg-black flex h-screen text-white">
      <div className="m-auto">
        <p className="text-4xl text-white font-bold pb-5">
          Experience
        </p>
        <div className="border-l-4 pl-10">
          <div>
            <div className="flex">
              <Image
                src="/igeargeek.png"
                width={80}
                height={70}
                alt="I GEAR GEEK"
              />
              <div className="pl-5 text-sm">
                <p>
                  JUNE 2024 - OCTOBER 2024
                </p>
                <p className="font-bold text-2xl">
                  Full-Stack Developer
                </p>
                <p>
                  IGEARGEEK CO., LTD. | Internship
                </p>
              </div>
            </div>
          </div>
          <div className="pl-5 pt-5">
            <ul>
              <li className="list-disc">
                Worked as a Full Stack Developer using Nuxt.js, Golang, and MySQL.
              </li>
              <li className="list-disc">
                Managed tasks and projects efficiently using Trello.
              </li>
              <li className="list-disc">
                Gained experience with the Agile development model to enhance project workflows.
              </li>
              <li className="list-disc">
                Developed and enhanced soft skills, including teamwork, communication, and problem-solving.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience