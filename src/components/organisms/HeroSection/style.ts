import { device } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerHero = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  padding: 12.5rem 2rem;
  position: relative;

  @media ${device.desktopS} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${device.desktopXS} {
    flex-direction: column-reverse;
    gap: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .list-items-hero {
      align-self: flex-end;
    }
  }

  .hero-texts {
    display: flex;
    flex-direction: column;
  }

  p {
    max-width: 23rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.colors.gray[700]};
    margin-top: 3.5rem;

    @media (max-width: 1230px) {
      margin-top: 2.5rem;
    }

    @media ${device.mobileL} {
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.black[200]};
      line-height: 1.4rem;
    }
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray[750]};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 600;
  line-height: 3rem;

  span {
    display: block;
    color: ${(props) => props.theme.colors.blue[800]};
  }

  @media ${device.mobileL} {
    font-size: ${(props) => props.theme.fontSizes.lg};
    line-height: 1.8rem;
    max-width: 18.5rem;
  }

  @media ${device.mobileS} {
    max-width: 17rem;
  }
`

export const ContainerInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colors.white};

  width: 100%;
  max-width: 42.7rem;
  padding: 0.5rem;
  margin-top: auto;

  @media ${device.desktopXS} {
    margin-top: 4rem;
  }

  @media (max-width: 615px) {
    .button-find-mentor {
      display: none;
    }
  }

  div {
    display: flex;
    flex: 1;
    position: relative;

    svg {
      align-self: center;
      width: 1.5rem;
      height: 1.5rem;

      position: absolute;
      right: 1rem;

      color: ${(props) => props.theme.colors.black[200]};
      opacity: 0.6;
      pointer-events: none;
    }

    input {
      width: 100%;
      border: 1px solid ${(props) => props.theme.colors.gray[600]};
      border-radius: 0.5rem;

      padding: 0.5rem 1rem;
      padding-right: 3rem;

      font-size: 1rem;
      line-height: 1.4rem;
      color: ${(props) => props.theme.colors.black[200]};
      outline: 0;

      &::placeholder {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.black[200]};
      }
    }
  }
`
