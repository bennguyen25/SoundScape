import svgPaths from "./svg-izw5bwkppm";

function BusinessOnboarding() {
  return (
    <div className="absolute bg-[#ffd100] h-[27.974px] left-[129.95px] rounded-[2.24322e+07px] top-0 w-[101.209px]" data-name="BusinessOnboarding">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[50.99px] not-italic text-[#003057] text-[14px] text-center top-[4.33px] tracking-[-0.1504px] translate-x-[-50%] w-[70px]">Step 1 of 3</p>
    </div>
  );
}

function BusinessOnboarding1() {
  return (
    <div className="absolute h-[24.005px] left-0 top-[39.97px] w-[361.111px]" data-name="BusinessOnboarding">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[180.46px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.99px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Join SoundScape</p>
    </div>
  );
}

function BusinessOnboarding2() {
  return (
    <div className="absolute h-[19.993px] left-0 top-[71.96px] w-[361.111px]" data-name="BusinessOnboarding">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[181.54px] not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[0.34px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Reach Sound CU members effortlessly</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[91.954px] relative shrink-0 w-[361.111px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[91.954px] relative w-[361.111px]">
        <BusinessOnboarding />
        <BusinessOnboarding1 />
        <BusinessOnboarding2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_12_2817)" id="Icon">
          <path d={svgPaths.p1ec5cf40} id="Vector" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p11e00b80} id="Vector_2" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p2f48f400} id="Vector_3" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_12_2817">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#ffd100] relative rounded-[2.24322e+07px] shrink-0 size-[39.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.01px] py-0 relative size-[39.997px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-[151.548px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.005px] relative w-[151.548px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Business Information</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[39.997px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Business Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[47.998px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[47.998px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.3125px] whitespace-pre">e.g., Olympia Coffee Roasters</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[75.983px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Location</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[47.998px] left-0 rounded-[8px] top-0 w-[327.789px]" data-name="Input">
      <div className="box-border content-stretch flex h-[47.998px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[327.789px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.3125px] whitespace-pre">Enter your address</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11.99px] size-[19.993px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_12_2809)" id="Icon">
          <path d={svgPaths.p2d82df0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66611" />
          <path d={svgPaths.p32889c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_12_2809">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[47.998px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Icon1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[75.983px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[15.992px] h-[167.958px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[265.271px] relative rounded-[16px] shrink-0 w-[361.111px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[23.994px] h-[265.271px] items-start pb-[0.669px] pt-[16.661px] px-[16.661px] relative w-[361.111px]">
        <Container2 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[54.37px] size-[15.992px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1e60f5a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M12.6607 7.99626H3.33178" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[47.998px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.998px] relative w-full">
        <Icon2 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[86.34px] not-italic text-[14px] text-nowrap text-white top-[14.33px] tracking-[-0.1504px] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#ffd100] grow h-[47.998px] min-h-px min-w-px opacity-50 relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[47.998px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#003057] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Continue</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[63.991px] relative shrink-0 w-[361.111px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.991px] h-[63.991px] items-start pl-0 py-0 relative w-[361.111px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

export default function SoundScapeMemberOnboardingFlowCopy() {
  return (
    <div className="relative size-full" data-name="SoundScape Member Onboarding Flow (Copy)" style={{ backgroundImage: "linear-gradient(rgb(0, 48, 87) 0%, rgb(0, 102, 179) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.994px] items-start pb-0 pl-[15.993px] pr-0 pt-[47.988px] relative size-full">
          <Container />
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}