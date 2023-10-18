import { Header } from "../../components/Header";
import * as S from "./styles";

export function Cast() {
  return (
    <>
      <Header />
      <S.ContainerGeral>
        <S.TitleCast>Join the community</S.TitleCast>
        <S.SubTitleCast>Subscribe today on one of our platforms</S.SubTitleCast>
        <S.ContainerRedes>
          <S.IconSpotify />
          <S.IconYoutube />
          <S.IconDiscord />
        </S.ContainerRedes>
      </S.ContainerGeral>
    </>
  );
}
