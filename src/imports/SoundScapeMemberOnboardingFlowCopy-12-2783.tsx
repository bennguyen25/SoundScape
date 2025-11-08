import svgPaths from "./svg-3wo6a9ym9g";

function ConnectAccountScreen() {
  return (
    <div className="absolute bg-[#ffd100] h-[31.985px] left-[117.79px] rounded-[2.24322e+07px] top-0 w-[109.535px]" data-name="ConnectAccountScreen">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[55.49px] not-italic text-[#003057] text-[16px] text-center text-nowrap top-[3px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Step 1 of 3</p>
    </div>
  );
}

function ConnectAccountScreen1() {
  return (
    <div className="absolute h-[24.005px] left-0 top-[47.98px] w-[345.108px]" data-name="ConnectAccountScreen">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[172.26px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.99px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Connect Your Account</p>
    </div>
  );
}

function ConnectAccountScreen2() {
  return (
    <div className="absolute h-[24.005px] left-0 top-[79.97px] w-[345.108px]" data-name="ConnectAccountScreen">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[172.98px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-0.99px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Sign in to Sound Credit Union</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[103.978px] relative shrink-0 w-[345.108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[103.978px] relative w-[345.108px]">
        <ConnectAccountScreen />
        <ConnectAccountScreen1 />
        <ConnectAccountScreen2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_12_2803)" id="Icon">
          <path d={svgPaths.p261bb000} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13337" />
          <path d={svgPaths.p148aaf00} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13337" />
        </g>
        <defs>
          <clipPath id="clip0_12_2803">
            <rect fill="white" height="13.6004" width="13.6004" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Secure Connection</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[-0.99px] tracking-[-0.3125px] w-[222px]">Your credentials are encrypted and never stored</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[76.004px] relative shrink-0 w-[236.869px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.99px] h-[76.004px] items-start relative w-[236.869px]">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,209,0,0.1)] h-[109.326px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,209,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[11.992px] h-[109.326px] items-start pb-[0.669px] pl-[16.661px] pr-[0.669px] pt-[16.661px] relative w-full">
          <Icon />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.34px] tracking-[-0.1504px] whitespace-pre">Full Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[35.996px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[35.996px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.3125px] whitespace-pre">Enter your name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[63.981px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.34px] tracking-[-0.1504px] whitespace-pre">Email</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[35.996px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[35.996px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.3125px] whitespace-pre">member@soundcu.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[63.981px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.34px] tracking-[-0.1504px] whitespace-pre">Password</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[35.996px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[35.996px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap tracking-[-0.3125px] whitespace-pre">••••••••</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[63.981px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[15.992px] h-[223.927px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[15.992px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2799)" id="Icon">
          <path d={svgPaths.p28f04400} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p3e6c9500} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_12_2799">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.98px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Bank-level encryption</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[15.992px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2799)" id="Icon">
          <path d={svgPaths.p28f04400} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p3e6c9500} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_12_2799">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.98px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">NCUA Insured</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[15.992px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2799)" id="Icon">
          <path d={svgPaths.p28f04400} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p3e6c9500} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_12_2799">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23.98px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Privacy guaranteed</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[75.962px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[506.527px] relative rounded-[16px] shrink-0 w-[345.108px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[23.994px] h-[506.527px] items-start pb-[0.669px] pt-[24.663px] px-[24.663px] relative w-[345.108px]">
        <Container2 />
        <Container6 />
        <Container10 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[49.37px] size-[15.992px] top-[10px]" data-name="Icon">
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
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[35.996px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.996px] relative w-full">
        <Icon4 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81.34px] not-italic text-[14px] text-nowrap text-white top-[8.34px] tracking-[-0.1504px] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#ffd100] grow h-[35.996px] min-h-px min-w-px opacity-50 relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[35.996px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#003057] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Continue</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[35.996px] relative shrink-0 w-[345.108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.992px] h-[35.996px] items-start relative w-[345.108px]">
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
        <div className="box-border content-stretch flex flex-col gap-[31.995px] items-start pb-0 pl-[23.994px] pr-0 pt-[71.992px] relative size-full">
          <Container />
          <Form />
          <Container11 />
        </div>
      </div>
    </div>
  );
}