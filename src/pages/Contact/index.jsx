import { Header } from "../../components/Header";
import * as S from "./styles";

export function Contact() {
  return (
    <>
      <Header />
      <S.ContainerGeral>
        <S.TitleContact>Send a message!</S.TitleContact>
        <S.ContainerIcons>
          <S.IconVoiceEmail />
          <S.IconSendEmail />
        </S.ContainerIcons>
      </S.ContainerGeral>
    </>
  );
}
