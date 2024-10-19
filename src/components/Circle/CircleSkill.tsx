import OrbitingCircles from "../ui/orbiting-circles"

const CircleSkill = () => {
  return (
    <div className="relative flex h-[500px] flex-col items-center justify-center">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skill
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <img
          src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
          width={80}
          height={80}
          alt="golang"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
          width={80}
          height={80}
          alt="mysql"
        />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/800px-Nuxt_logo_%282021%29.svg.png"
          width={120}
          height={120}
          alt="nuxt"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <img 
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          width={80}
          height={80}
          alt="react"
        />
      </OrbitingCircles>
    </div>
  )
}

export default CircleSkill