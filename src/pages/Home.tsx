/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import styled from '@emotion/styled';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	.section {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100vw;
	}
`;

const MainLogo = styled.img`
	width: 750px;
	height: 160px;
	margin-top: 160px;
	margin-bottom: 62px;
`;

const ShadowedBox = styled.div`
	width: 610px;
	height: 200px;
	border-radius: 12px;
	box-shadow: ${chakraTheme.shadows.lg};
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span {
		line-height: 160%;
		font-weight: bold;
	}
`;

const BlueBtn = styled(Link)`
	width: 328px;
	height: 38px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: ${chakraTheme.colors.blue[500]};
	border-radius: 5px;
	color: #fff;
	img {
		position: absolute;
		left: 15px;
	}
`;

const Home = () => {
	const [imgSrc, setImgSrc] = useState('/icons/chevDown.svg');
	return (
		<ReactFullpage
			afterLoad={function (origin, destination, direction) {
				if (direction === 'up') {
					setImgSrc('/icons/chevDown.svg');
				} else {
					setImgSrc('/icons/chevUp.svg');
				}
			}}
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<Wrapper>
							<div className="section">
								<MainLogo
									src="/images/titleLogo.svg"
									alt="title logo"
								/>
								<h1
									css={css`
										margin-bottom: 66px;
									`}
								>
									나만보는 북마크가 아닌,
									<span
										css={css`
											color: ${chakraTheme.colors
												.blue[500]};
										`}
									>
										다같이
									</span>
									보는 북마크
								</h1>
								<h2>
									친구와 함께 맛있는{' '}
									<span
										css={css`
											color: ${chakraTheme.colors
												.yellow[500]};
										`}
									>
										쿠키
									</span>
									를 나눠먹듯, 맛있는 링크들을{' '}
									<span
										css={css`
											color: #ff8a00;
										`}
									>
										서로 나누는
									</span>{' '}
									공간
								</h2>
								<ShadowedBox
									css={css`
										margin-top: 66px;
										margin-bottom: 100px;
									`}
								>
									<span>
										나만 보기 아까운 인터넷의 소중한{' '}
										<span
											css={css`
												color: ${chakraTheme.colors
													.yellow[500]};
											`}
										>
											초코칩 쿠키
										</span>{' '}
										같은
									</span>
									<span>
										너무 맛있는{' '}
										<span
											css={css`
												color: ${chakraTheme.colors
													.orange[300]};
											`}
										>
											자료들을 함께 나누고
										</span>
									</span>
									<span>
										<span
											css={css`
												color: #00b976;
											`}
										>
											서로의 쿠키 창고들을 공유
										</span>
										하면서
									</span>
									<span
										css={css`
											color: ${chakraTheme.colors
												.red[500]};
										`}
									>
										즐거움을 배로 늘려봅시다!
									</span>
								</ShadowedBox>
							</div>
							<div
								css={css`
									display: flex;
									justify-content: center;
									img {
										width: 50px;
										height: 50px;
									}
								`}
							>
								<img src={imgSrc} alt="chevron indicator" />
							</div>
							<div className="section">
								<ShadowedBox
									css={css`
										margin-top: 127px;
										margin-bottom: 85px;
										gap: 41px;
									`}
								>
									<h3>로그인 하고 쿠키스토리지 시작하기</h3>
									<BlueBtn to={'/login'}>
										<img
											src="/icons/login.svg"
											alt="login icon"
										/>
										<span>로그인 하러가기</span>
									</BlueBtn>
								</ShadowedBox>
								<ShadowedBox
									css={css`
										margin-bottom: 200px;
										gap: 41px;
									`}
								>
									<h3>
										아직 계정이 없으시다면! 회원가입
										하러가기
									</h3>
									<BlueBtn to={'/register'}>
										<img
											src="/icons/signUp.svg"
											alt="signup icon"
										/>
										<span>회원가입 하러가기</span>
									</BlueBtn>
								</ShadowedBox>
							</div>
						</Wrapper>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};

export default Home;
