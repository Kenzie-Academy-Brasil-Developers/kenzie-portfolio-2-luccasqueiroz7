import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

import { i18n } from "../../translate/i18n";

export const Contacts = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useViewportScroll();

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ opacity: scrollYProgress }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                {i18n.t("contacts.conversation")}{" "}
                <Text as="span" type="heading2" color="brand1">
                  {i18n.t("contacts.developOurCreativy")}
                </Text>{" "}
                {i18n.t("contacts.together")}
              </Text>
              <Text color="grey2" type="body1">
                {i18n.t("contacts.contactMe")}
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text
                  as="a"
                  type="heading4"
                  color="grey4"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  {i18n.t("contacts.my")} Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                  {i18n.t("contacts.whatsapp")}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  {i18n.t("contacts.talkWhatsapp")}
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text
                  as="a"
                  type="heading4"
                  color="grey4"
                  target="_blank"
                  href={`mailto:${userData.emailUser}`}
                >
                  {i18n.t("contacts.my")} email
                </Text>
                <Text color="grey2" type="body2">
                  {i18n.t("contacts.email")}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto:${userData.emailUser}`}
                >
                  {i18n.t("contacts.sendEmail")}
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text
                  as="a"
                  type="heading4"
                  color="grey4"
                  target="_blank"
                  href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
                >
                  {i18n.t("contacts.my")} LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                  {i18n.t("contacts.linkedin")}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
                >
                  {i18n.t("contacts.goToLinkedin")}
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
