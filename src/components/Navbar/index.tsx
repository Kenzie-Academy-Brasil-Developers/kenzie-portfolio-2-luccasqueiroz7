import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
  SelectLanguage,
  DivLanguages,
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";

import { i18n } from "../../translate/i18n";
import { MdLanguage } from "react-icons/md";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const I18N_STORAGE_KEY = "i18nextLng";

  const handleSelectChange = (event: any) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    location.reload();
  };

  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        {i18n.t("header.home")}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        {i18n.t("header.projects")}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        {i18n.t("header.contact")}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        {i18n.t("header.socialMedia")}
      </Button>
      <DivLanguages>
        <MdLanguage color="white" />
        <SelectLanguage onChange={handleSelectChange}>
          <option>{i18n.t("header.language")}</option>
          <option value="pt-BR">pt-BR</option>
          <option value="en-US">en-US</option>
        </SelectLanguage>
      </DivLanguages>
    </NavbarLinks>
  );
};
