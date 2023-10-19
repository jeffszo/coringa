import { Header } from "../../components/Header";
import * as S from "./styles";
import CoringaOne from "../../assets/coringa-one (1).png";
import CoringaTwo from "../../assets/coringa-one (2).png";
import CoringaThree from "../../assets/coringa-one (6).png";
import CoringaFour from "../../assets/coringa-one (5).png";

export function Gallery() {
  return (
    <>
      <Header />
      <S.ContainerGeral>
        <S.ContainerImg>
          <S.ImageJoker loading="lazy" src={CoringaOne} />
          <S.ImageJoker loading="lazy" src={CoringaTwo} />
        </S.ContainerImg>
        <S.ContainerImg>
          <S.ImageJoker loading="lazy" src={CoringaFour} />
          <S.ImageJoker loading="lazy" src={CoringaThree} />
        </S.ContainerImg>
        
      </S.ContainerGeral>
    </>
  );
}
