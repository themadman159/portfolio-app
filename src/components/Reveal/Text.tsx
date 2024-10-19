import BoxReveal from "@/components/ui/box-reveal"

interface TextRevealProps {
  text: string;
  boxColor?: string
  duration?: number
  textClass?: string
}

const TextReveal = (props: TextRevealProps) => {
  return (
    <div>
      <BoxReveal
        boxColor={props.boxColor ? props.boxColor :"#5046e6"} 
        duration={props.duration ? props.duration : 0.5}
      >
        <p 
          className={`${props.textClass}`}
        >
          {props.text}
        </p>
      </BoxReveal>
    </div>
  )
} 

export default TextReveal