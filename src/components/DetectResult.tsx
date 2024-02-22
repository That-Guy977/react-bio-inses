import NavButton from './NavButton'

function DetectResult({ image, pest, pred }: DetectResultProps) {
  return (
    <div className="detect-result">
      <img src={image} width="500" />
      <div className="detect-details">
        <p className="detect-counts">
          พบแมลง {pest + pred} ตัว
          <br />
          <span style={{ color: "red" }}>พบแมลงไม่ดี {pest} ตัว</span>
          <br />
          <span style={{ color: "blue" }}>พบแมลงดี {pred} ตัว</span>
        </p>
        <button>Details</button>
        <NavButton route="../simulation" text="Simulate!" />
      </div>
    </div>
  )
}

interface DetectResultProps {
  image: string;
  pest: number;
  pred: number;
}

export default DetectResult
