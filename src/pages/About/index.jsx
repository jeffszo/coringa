/* eslint-disable react/no-unescaped-entities */
import { Header } from "../../components/Header";
import * as S from "./styles";

export function About() {
  return (
    <>
      <Header />
      <S.ContainerGeral>
        <S.TitleAbout>
            Who is the joker?
        </S.TitleAbout>
        <S.SubTitle>    
            Well, it's kind of sick...
        </S.SubTitle>
        <S.ContainerInfo>
            <S.Describe>
            The 2019 film "Joker," directed by Todd Phillips and starring Joaquin Phoenix, <br/> is a dark and disturbing reinterpretation of the origin of iconic Batman villain <br/> the Joker. The main character, Arthur Fleck, played by Joaquin Phoenix, is a stand-up <br/> comedian who lives in Gotham City. The film explores Arthur's journey from a troubled <br/> and marginalized man to becoming the villain known as the Joker
            </S.Describe>
        </S.ContainerInfo>
      </S.ContainerGeral>
    </>
  );
}
