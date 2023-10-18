
import * as S from './styles'


export function Header(){
    return (
        <>
            <S.Header>
                <S.List>
                    <S.Item to='/'>
                        <S.TitleJoker>Joker</S.TitleJoker>
                    </S.Item>
                </S.List>
                <S.List style={{marginLeft: 250}}>
                    <S.Item to='/about'>About</S.Item>
                    <S.Item to='/gallery'>Gallery</S.Item>
                    <S.Item to='/cast'>Cast</S.Item>
                    <S.Item to='/contact'>Contact Us</S.Item>
                    <S.Item>
                        <S.IconSearch/>
                    </S.Item>
                </S.List>
            </S.Header>
        
        </>
    )
}