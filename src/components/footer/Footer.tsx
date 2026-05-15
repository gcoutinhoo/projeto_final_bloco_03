import { FacebookLogoIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="bg-linear-to-r from-[#6357C3] to-[#3AB0CA] backdrop-blur-md border-t border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.25)] py-4 text-center">
      <div className="flex flex-col items-center py-4">
        <p className="text-xl text-white font-bold"> FarmaForte © {data} </p>
        <p className="text-lg text-white"> Acesse nossas redes sociais </p>
        <div className="flex gap-4 mt-3">
          <WhatsappLogoIcon size={38} weight="fill" className="cursor-pointer hover:scale-110 transition" />
          <InstagramLogoIcon size={38} weight="fill" className="cursor-pointer hover:scale-110 transition" />
          <FacebookLogoIcon size={38} weight="fill" className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>
  );
}

export default Footer;