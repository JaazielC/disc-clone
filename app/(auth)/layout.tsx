import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex items-center justify-center z-[-100]">
      <Image
        priority
        src="/image.svg"
        fill
        draggable="false"
        alt="SVG Background"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
