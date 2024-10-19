import CircleSkill from "../Circle/CircleSkill"

const SkillSection = () => {
  return (
    <div className="h-screen flex bg-#F0F0F0">
      <div className="m-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <CircleSkill />
          </div>
          <div className="flex items-center">
            <div>
              <div className="border-l-8 border-l-black pl-5">
                <p className="text-4xl font-bold">
                  Frontend
                </p>
                <div>
                  <p className="text-lg">
                    React.js, Nuxt.js, Typescript
                  </p>
                </div>
              </div>
              <div className="pt-10">
                <div className="border-l-8 border-l-black pl-5">
                  <p className="text-4xl font-bold">
                    Backend
                  </p>
                  <div>
                    <p className="text-lg">
                      Golang, Php, NodeJs(Express)
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <div className="border-l-8 border-l-black pl-5">
                  <p className="text-4xl font-bold">
                    Database, Other
                  </p>
                  <div>
                    <p className="text-lg">
                      MySql, PostgresSql, Git, Docker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection