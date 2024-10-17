import BoxReveal from "@/components/ui/box-reveal"

interface TextRevealProps {
  text: string;
  boxColor?: string
  duration?: number
  textSize?: string
  fontBold?: boolean
}

const TextReveal = (props: TextRevealProps) => {
  return (
    <div>
      <BoxReveal
        boxColor={props.boxColor ? props.boxColor :"#5046e6"} 
        duration={props.duration ? props.duration : 0.5}
      >
        <p 
          className={`
            ${props.textSize} 
            ${props.fontBold ? 'font-bold' : ''}
          `}
        >
          {props.text}
        </p>
      </BoxReveal>
    </div>
  )
} 

export default TextReveal