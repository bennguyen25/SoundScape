import svgPaths from "./svg-t86ptwf71g";

function WelcomeScreen() {
  return (
    <div className="h-[255.995px] overflow-clip relative shrink-0 w-full" data-name="WelcomeScreen">
      <div className="absolute bottom-[32.94%] left-0 right-0 top-[42.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 63">
          <path d={svgPaths.p21c6ea80} fill="var(--fill-0, #FFD100)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[255.995px] items-start relative shrink-0 w-full" data-name="Container">
      <WelcomeScreen />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start opacity-10 pb-0 pt-[590.699px] px-0 relative size-full" data-name="Container">
      <Container />
    </div>
  );
}