import * as S from "./styles";

export function Section() {
  return (
    <>
      <S.ContainerGeral>
        <S.Title>Joaquim Phoenix</S.Title>
        <S.ContainerDescIcon>
        <S.Describe>
          Put on a<br /> happy face
        </S.Describe>

        </S.ContainerDescIcon>

        <S.Title>Comming Soon</S.Title>
        <S.ContainerButton>
          <S.Button textDark>Buy Tickets</S.Button>
          <S.Button bg  weight = '200'>
            <S.IconPlay/>
            watch trailer
          </S.Button>
        </S.ContainerButton>
        <S.ContainerRedes>
            <S.IconFace/>
            <S.IconInsta/>
            <S.IconTwitter/>
        </S.ContainerRedes>
      </S.ContainerGeral>
    </>
  );
}
